var GITHUB_LINK = "https://github.com/Samantha-norrie";
var LINKEDIN_LINK = "https://www.linkedin.com/in/samantha-norrie-845204167/";

export function redirectToGithub() {
    window.location.href = GITHUB_LINK;
}

export function redirectToLinkedIn() {
    window.location.href = LINKEDIN_LINK;
}

export function redirectToResume() {
    window.location.href = window.location.href + "resume";
}
