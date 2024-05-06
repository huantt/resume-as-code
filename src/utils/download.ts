import {slugify} from "@/utils/slug";
import YAML from "yaml";
import {ResumeData} from "@/model/data";

export function downloadJSON(jsonData: ResumeData, name?: string) {
    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(jsonData))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${slugify(name || 'resume')}.json`;
    link.click();
    link.remove()
}

export function downloadYAML(jsonData: ResumeData, name?: string) {
    const jsonString = `data:text/yaml;chatset=utf-8,${encodeURIComponent(YAML.stringify(jsonData))}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = `${slugify(name || 'resume')}.yaml`;
    link.click();
    link.remove()
}
