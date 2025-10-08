import {SERVERS} from "../constants/servers";

export function DynamicLink( input: { id: string, message?: string } ) {
    const server = SERVERS.find(server => server.id === input.id);
    if (!server) return <>BROKEN LINK: {input.id}</>;
    return <a href={server.link} target={"_blank"}>{input.message || server.label}</a>
}