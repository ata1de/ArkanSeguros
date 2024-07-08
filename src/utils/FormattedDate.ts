import dayjs from "dayjs";
import { Timestamp } from "firebase/firestore";

export function FormattedDate(createdAt: Timestamp | Date): string {
    const date = createdAt instanceof Timestamp ? dayjs(createdAt.toDate()) : dayjs(createdAt);
    const month = date.format("MMMM");
    const year = date.format("YYYY");

    return `Joined ${month} ${year}`;
}
