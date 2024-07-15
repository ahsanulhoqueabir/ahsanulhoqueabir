function getImgUrl(name) {
  return new URL(`../assets/skillicon/${name}`, import.meta.url).href;
}
const FolderImage = (folder, name) => {
  return new URL(`../assets/${folder}/${name}`, import.meta.url).href;
};
const skillsImageUrl = (name) => {
  return new URL(`../assets/skillicon/${name}`, import.meta.url).href;
};
const ProjectsImgUrl = (name) => {
  return new URL(`../assets/project/${name}`, import.meta.url).href;
};
export { getImgUrl, skillsImageUrl, ProjectsImgUrl, FolderImage };
