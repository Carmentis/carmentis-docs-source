import {SERVERS} from "../constants/servers";

export function DynamicLink( input: { target: "exchange", env: 'beta' | 'alpha' } ) {
    const server = SERVERS.find(server => server.environment === input.env && server.name === input.target);
    if (!server) return <></>;
    return <a href={server.frontendUrl} target={"_blank"}>{input.target} ({input.env})</a>
}