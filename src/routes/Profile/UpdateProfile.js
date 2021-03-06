import { useMutation, useQuery } from "@apollo/client";
import React, { Component, useEffect, useState } from "react";
import styled from "styled-components";
import { GET_MY_PROFILE, UPDATE_USER } from "./Profile.queries";
import useInput from "../../hooks/useInput";
import { formatYMD } from "../../utils/dateUtils";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Container = styled.div``;
const Wrapper = styled.div``;
const InputWrapper = styled.div`
  display: flex;
`;
const InputLabel = styled.div`
  width: 30%;
  padding: 20px;
`;
const Input = styled.input``;

const BirthInput = styled.input``;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
`;

const Button = styled.button``;

const MAX_IMAGE_SIZE = 1024 * 1024 * 5;
const IMAGE_TYPES = ["image/jpeg", "image/png"];

const UpdateProfile = ({}) => {
  const history = useHistory();
  const [user, setUser] = useState();
  const nickName = useInput("");
  const [birth, setBirth] = useState();
  const [profileImage, setProfileImage] = useState();

  const { data } = useQuery(GET_MY_PROFILE, {
    fetchPolicy: "network-only",
  });

  const [updateUserMutation] = useMutation(UPDATE_USER, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data?.getMyProfile?.ok) {
      const user = data.getMyProfile.user;
      if (user) {
        setUser(user);
      }
    }
  }, [data]);

  useEffect(() => {
    if (user) {
      nickName.setValue(user.nickName);
      setBirth(formatYMD(user.birth));

      if (user.profileImages?.length) {
        setProfileImage({
          uri: user.profileImages[0].url,
        });
      }
    }
  }, [user]);

  const imageUploadHandler = (event) => {
    const { files } = event.target;
    console.log(files);

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      let reader = new FileReader();

      if (file.size > MAX_IMAGE_SIZE || !IMAGE_TYPES.some((type) => type === file.type)) {
        window.alert(`이미지 최대 사이즈는 ${MAX_IMAGE_SIZE}byte 입니다.`);
        return;
      }

      reader.onload = () => {
        console.log(reader.result);
        setProfileImage({
          file: file,
          uri: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const finishOnclick = async () => {
    try {
      let profileImageInput;

      // 프로필 사진 업로드
      if (profileImage.file) {
        const form = new FormData();
        form.append("file", profileImage.file);
        const { data } = await axios.post("http://localhost:4000/api/upload", form, {
          headers: {
            "Content-type": "multipart/form-data",
          },
        });
        if (data) {
          const { key, location } = data;
          profileImageInput = {
            key: key,
            url: location,
          };
        } else {
          throw Error();
        }
      }

      const { data } = await updateUserMutation({
        variables: {
          nickName: nickName.value,
          birth: new Date(birth).getTime().toString(),
          photos: profileImageInput ? [profileImageInput] : [],
        },
      });
      console.log(data);
      if (data?.updateUser?.ok) {
        const user = data.updateUser.user;
        if (user) {
          window.alert("정보가 수정되었습니다.");
          history.push("/");
          return;
        }
      }
      throw new Error("정보 수정 중 오류가 발생했습니다.");
    } catch (error) {
      console.log(error);
    }
  };

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Wrapper>Update Profile</Wrapper>
      <InputWrapper>
        <InputLabel>프로필 사진</InputLabel>
        {profileImage ? (
          <ProfileImage src={profileImage.uri} />
        ) : (
          <ProfileImage
            src={
              "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/11539578_397273127125271_8786822503663755867_n.jpg?_nc_cat=104&ccb=2&_nc_sid=85a577&_nc_ohc=yisTVf0nJgYAX_jEyBN&_nc_ht=scontent-ssn1-1.xx&oh=8ac2f065e736e63d776e0c6a4a79d58c&oe=60466F9C"
            }
          />
        )}

        <Input type="file" accept="image/png, image/jpeg" onChange={imageUploadHandler} />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>닉네임</InputLabel>
        <Input value={nickName.value} onChange={nickName.onChange} />
      </InputWrapper>
      <InputWrapper>
        <InputLabel>생년월일</InputLabel>
        <BirthInput type="date" value={birth} max={birth} onChange={(event) => setBirth(event.target.value)} />
      </InputWrapper>
      <Button onClick={finishOnclick}>수정완료</Button>
    </Container>
  );
};

export default UpdateProfile;
