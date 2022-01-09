export default function (projectInfos = [], action) {
    if (action.type === 'selectedProject') {
        return action.projectInfos;
    } else {
        return projectInfos;
    }
}