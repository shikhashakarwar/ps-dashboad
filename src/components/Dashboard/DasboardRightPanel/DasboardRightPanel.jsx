
import React from "react";
import { Container } from "@material-ui/core";

function DasboardRightPanel(props) {

    return (
        <>
            { props.regionsData &&
                <ul>
                    <li>Region: {props.regionsData.region}</li>
                    <li>Alias: {props.regionsData.alias}</li>
                    
                    {props.regionsData.payload.map((machinesData, index) => {
                        return (
                            <>
                                <li key={index + 1}>Package: {machinesData.package}</li>
                                {
                                    machinesData.machines.map((machine, mindex) => {
                                        return (
                                            <ul key={mindex + 1}>
                                                <li>ip: {machine.ip}</li>
                                                <li>env: {machine.enviroment}</li>
                                                <li>status: {machine.status}</li>
                                            </ul>
                                        )
                                    }) 
                                }
                            </>
                        )
                        
                    })}
                </ul>

            }

        </>
    )
};

export default DasboardRightPanel;