const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const nickNameRegex = /^[가-힣a-zA-Z0-9]+$/;

const passworRegex = /(?=.*\d{1,50})(?=.*[~`!@#$%\_^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;

export { emailRegex, nickNameRegex, passworRegex };
