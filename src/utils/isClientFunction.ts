export interface isClientType {
    newClient: boolean;
    diff: number;
    clientCount: number;
}

export function isClientFunction(newClientSnapshotSize: number, oldClientSnapshortSize: number) {    
    if (newClientSnapshotSize > oldClientSnapshortSize) {
        const diff = newClientSnapshotSize - oldClientSnapshortSize;
        return {newClient: true, diff, clientCount: newClientSnapshotSize} 
    } else {
        const diff = oldClientSnapshortSize - newClientSnapshotSize;
        return {newClient: false, diff, clientCount: oldClientSnapshortSize}
    }
}

