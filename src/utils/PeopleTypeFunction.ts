export function PeopleTypeFunction(physicalSnapshotSize: number, legalSnapshortSize: number) {    
    if (physicalSnapshotSize > legalSnapshortSize) {
        const diff = physicalSnapshotSize - legalSnapshortSize;
        return {pf: true, diff, clientCount: physicalSnapshotSize} 
    } else {
        const diff = legalSnapshortSize - physicalSnapshotSize;
        return {pf: false, diff, clientCount: legalSnapshortSize}
}
}