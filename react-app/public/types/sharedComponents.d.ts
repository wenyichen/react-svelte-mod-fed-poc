/// <reference types="react" />
declare module "sharedComponents/models/database" {
    export interface Database {
        name: string;
        project: string;
        type: string;
        status: string;
        createdBy: string;
        version: string;
    }
}
declare module "sharedComponents/components/database-list" {
    import { Database } from "sharedComponents/models/database";
    function DatabaseList(props: {
        databases: Database[];
    }): JSX.Element;
    export default DatabaseList;
}
declare module "sharedComponents/models/projects" {
    export interface Project {
        name: string;
        description: string;
        status: string;
    }
}
declare module "sharedComponents/services/project-names-service" {
    export function getProjectNames(): string[];
}
declare module "sharedComponents/services/project-service" {
    import { Project } from "sharedComponents/models/projects";
    export function getProjects(): Project[];
}
declare module "sharedComponents/components/project-list" {
    function ProjectList(): JSX.Element;
    export default ProjectList;
}
declare module "sharedComponents/components/new-project" {
    import { FC } from "react";
    interface Props {
        handleSubmit: (values: {
            name: string;
            description: string;
        }) => void;
        errorCode: string;
        errorMessage: string;
    }
    const ProjectForm: FC<Props>;
    export default ProjectForm;
}
