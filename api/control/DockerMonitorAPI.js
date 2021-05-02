import Dockerode from "dockerode";

const mockData = {
    listNodes : [
        {
            "ID": "rgmqv3fuqmrf7jwmbvt5q79eh",
            "Version": {
                "Index": 9
            },
            "CreatedAt": "2021-05-01T17:45:06.9534343Z",
            "UpdatedAt": "2021-05-01T17:45:07.5731356Z",
            "Spec": {
                "Labels": {},
                "Role": "manager",
                "Availability": "active"
            },
            "Description": {
                "Hostname": "docker-desktop",
                "Platform": {
                    "Architecture": "x86_64",
                    "OS": "linux"
                },
                "Resources": {
                    "NanoCPUs": 4000000000,
                    "MemoryBytes": 13310636032
                },
                "Engine": {
                    "EngineVersion": "19.03.13",
                    "Plugins": [
                        {
                            "Type": "Log",
                            "Name": "awslogs"
                        },
                        {
                            "Type": "Log",
                            "Name": "fluentd"
                        },
                        {
                            "Type": "Log",
                            "Name": "gcplogs"
                        },
                        {
                            "Type": "Log",
                            "Name": "gelf"
                        },
                        {
                            "Type": "Log",
                            "Name": "journald"
                        },
                        {
                            "Type": "Log",
                            "Name": "json-file"
                        },
                        {
                            "Type": "Log",
                            "Name": "local"
                        },
                        {
                            "Type": "Log",
                            "Name": "logentries"
                        },
                        {
                            "Type": "Log",
                            "Name": "splunk"
                        },
                        {
                            "Type": "Log",
                            "Name": "syslog"
                        },
                        {
                            "Type": "Network",
                            "Name": "bridge"
                        },
                        {
                            "Type": "Network",
                            "Name": "host"
                        },
                        {
                            "Type": "Network",
                            "Name": "ipvlan"
                        },
                        {
                            "Type": "Network",
                            "Name": "macvlan"
                        },
                        {
                            "Type": "Network",
                            "Name": "null"
                        },
                        {
                            "Type": "Network",
                            "Name": "overlay"
                        },
                        {
                            "Type": "Volume",
                            "Name": "local"
                        }
                    ]
                },
                "TLSInfo": {
                    "TrustRoot": "-----BEGIN CERTIFICATE-----\nMIIBaTCCARCgAwIBAgIUE1sw+WD9gBN4oXlhZd3TKMbDEQAwCgYIKoZIzj0EAwIw\nEzERMA8GA1UEAxMIc3dhcm0tY2EwHhcNMjEwNTAxMTc0MDAwWhcNNDEwNDI2MTc0\nMDAwWjATMREwDwYDVQQDEwhzd2FybS1jYTBZMBMGByqGSM49AgEGCCqGSM49AwEH\nA0IABJMCtZ6T+plvqi6sp3RWdrQpuCjSFWsdetH5gvJB8Eo1CcniW4O3dlxvacu0\nYTImhQdpsgfOdSBCNvVaCivya0KjQjBAMA4GA1UdDwEB/wQEAwIBBjAPBgNVHRMB\nAf8EBTADAQH/MB0GA1UdDgQWBBRDpilxjIKhhXN1e5CWybChA7MPMjAKBggqhkjO\nPQQDAgNHADBEAiA7oSGK1W/NMlfK6ttWAt1EhR3Bx7yJtrKiMQiZvY/RhAIgXLrT\nEegAa3f857CrjbwitWMipN0Pan4XyjVLlUks1Nc=\n-----END CERTIFICATE-----\n",
                    "CertIssuerSubject": "MBMxETAPBgNVBAMTCHN3YXJtLWNh",
                    "CertIssuerPublicKey": "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEkwK1npP6mW+qLqyndFZ2tCm4KNIVax160fmC8kHwSjUJyeJbg7d2XG9py7RhMiaFB2myB851IEI29VoKK/JrQg=="
                }
            },
            "Status": {
                "State": "ready",
                "Addr": "192.168.65.3"
            },
            "ManagerStatus": {
                "Leader": true,
                "Reachability": "reachable",
                "Addr": "192.168.65.3:2377"
            }
        }
    ],
    listServices : [
        {
            "ID": "krqd7up1d3frv5z9kdiqr2cs9",
            "Version": {
                "Index": 12
            },
            "CreatedAt": "2021-05-01T17:58:23.1263846Z",
            "UpdatedAt": "2021-05-01T17:58:23.1311893Z",
            "Spec": {
                "Name": "webswarm",
                "Labels": {},
                "TaskTemplate": {
                    "ContainerSpec": {
                        "Image": "nginx:latest@sha256:75a55d33ecc73c2a242450a9f1cc858499d468f077ea942867e662c247b5e412",
                        "Init": false,
                        "DNSConfig": {},
                        "Isolation": "default"
                    },
                    "Resources": {
                        "Limits": {},
                        "Reservations": {}
                    },
                    "Placement": {
                        "Platforms": [
                            {
                                "Architecture": "amd64",
                                "OS": "linux"
                            },
                            {
                                "OS": "linux"
                            },
                            {
                                "OS": "linux"
                            },
                            {
                                "Architecture": "arm64",
                                "OS": "linux"
                            },
                            {
                                "Architecture": "386",
                                "OS": "linux"
                            },
                            {
                                "Architecture": "mips64le",
                                "OS": "linux"
                            },
                            {
                                "Architecture": "ppc64le",
                                "OS": "linux"
                            },
                            {
                                "Architecture": "s390x",
                                "OS": "linux"
                            }
                        ]
                    },
                    "ForceUpdate": 0,
                    "Runtime": "container"
                },
                "Mode": {
                    "Replicated": {
                        "Replicas": 2
                    }
                },
                "EndpointSpec": {
                    "Mode": "vip",
                    "Ports": [
                        {
                            "Protocol": "tcp",
                            "TargetPort": 2020,
                            "PublishedPort": 1010,
                            "PublishMode": "ingress"
                        }
                    ]
                }
            },
            "Endpoint": {
                "Spec": {
                    "Mode": "vip",
                    "Ports": [
                        {
                            "Protocol": "tcp",
                            "TargetPort": 2020,
                            "PublishedPort": 1010,
                            "PublishMode": "ingress"
                        }
                    ]
                },
                "Ports": [
                    {
                        "Protocol": "tcp",
                        "TargetPort": 2020,
                        "PublishedPort": 1010,
                        "PublishMode": "ingress"
                    }
                ],
                "VirtualIPs": [
                    {
                        "NetworkID": "hbylyxpex4vcli2co9kfjdouf",
                        "Addr": "10.0.0.3/24"
                    }
                ]
            }
        }
    ],
    listTasks : [
        {
            "ID": "uhn3f7m5eaoepuvvt6f7dh5vu",
            "Version": {
                "Index": 18
            },
            "CreatedAt": "2021-05-01T17:58:23.1369256Z",
            "UpdatedAt": "2021-05-01T17:58:37.702525Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "nginx:latest@sha256:75a55d33ecc73c2a242450a9f1cc858499d468f077ea942867e662c247b5e412",
                    "Init": false,
                    "DNSConfig": {},
                    "Isolation": "default"
                }
            },
            "ServiceID": "krqd7up1d3frv5z9kdiqr2cs9",
            "Slot": 1,
            "NodeID": "rgmqv3fuqmrf7jwmbvt5q79eh",
            "Status": {
                "Timestamp": "2021-05-01T17:58:37.6315806Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "a3bd8a2babab544174f357a6026c4545a03e523128bb64441b0a1706bf22e5e5",
                    "PID": 12581,
                    "ExitCode": 0
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "hbylyxpex4vcli2co9kfjdouf",
                        "Version": {
                            "Index": 6
                        },
                        "CreatedAt": "2021-05-01T17:45:06.9537377Z",
                        "UpdatedAt": "2021-05-01T17:45:07.0028091Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {}
                            },
                            "Scope": "swarm"
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.0.0.0/24",
                                    "Gateway": "10.0.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.0.0.4/24"
                    ]
                }
            ]
        },
        {
            "ID": "yd0r7lhdfoenozok33efoetpz",
            "Version": {
                "Index": 18
            },
            "CreatedAt": "2021-05-01T17:58:23.1371555Z",
            "UpdatedAt": "2021-05-01T17:58:37.7027217Z",
            "Labels": {},
            "Spec": {
                "ContainerSpec": {
                    "Image": "nginx:latest@sha256:75a55d33ecc73c2a242450a9f1cc858499d468f077ea942867e662c247b5e412",
                    "Init": false,
                    "DNSConfig": {},
                    "Isolation": "default"
                }
            },
            "ServiceID": "krqd7up1d3frv5z9kdiqr2cs9",
            "Slot": 2,
            "NodeID": "rgmqv3fuqmrf7jwmbvt5q79eh",
            "Status": {
                "Timestamp": "2021-05-01T17:58:37.6323788Z",
                "State": "running",
                "Message": "started",
                "ContainerStatus": {
                    "ContainerID": "ffcdd38fc7fc41c53d9f3756985cb37456f88153a5c19157b00552d13cfeb737",
                    "PID": 12573,
                    "ExitCode": 0
                },
                "PortStatus": {}
            },
            "DesiredState": "running",
            "NetworksAttachments": [
                {
                    "Network": {
                        "ID": "hbylyxpex4vcli2co9kfjdouf",
                        "Version": {
                            "Index": 6
                        },
                        "CreatedAt": "2021-05-01T17:45:06.9537377Z",
                        "UpdatedAt": "2021-05-01T17:45:07.0028091Z",
                        "Spec": {
                            "Name": "ingress",
                            "Labels": {},
                            "DriverConfiguration": {},
                            "Ingress": true,
                            "IPAMOptions": {
                                "Driver": {}
                            },
                            "Scope": "swarm"
                        },
                        "DriverState": {
                            "Name": "overlay",
                            "Options": {
                                "com.docker.network.driver.overlay.vxlanid_list": "4096"
                            }
                        },
                        "IPAMOptions": {
                            "Driver": {
                                "Name": "default"
                            },
                            "Configs": [
                                {
                                    "Subnet": "10.0.0.0/24",
                                    "Gateway": "10.0.0.1"
                                }
                            ]
                        }
                    },
                    "Addresses": [
                        "10.0.0.5/24"
                    ]
                }
            ]
        }
    ]
};

const docker = new Dockerode();

// containers stats
const getContainers = async () => {
    const liContainers = await docker.listContainers();
    return liContainers;
}

const inspectContainer = async (cid) => {
    const container = getContainer(cid);
    const resp = await container.inspect();
    return resp;
}

const getContainer = (cid) => {
    const continer = docker.getContainer(cid);
    return continer;
}


// swarm stats
const getListNodes = async () => {
    // it will throw an error if it's not a swarm mode
    const liNodes = await docker.listNodes();
    return liNodes;
}

const getListServices = async () => {
    const liServices = await docker.listServices();
    return liServices;
}

const getListTasks = async () => {
    const liTasks = await docker.listTasks();
    return liTasks;
}




export { 
    getContainers, getContainer, inspectContainer,
    getListNodes, getListServices, getListTasks
 };