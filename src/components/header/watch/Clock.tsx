import {FC} from 'react';
import {useLiveDate} from "../../../utilities/time/useLiveDate";

const Clock: FC<{}> = ({}) => {
    const now:Date = useLiveDate();
    const hour:string = (now.getHours() % 12 || 12).toString().padStart(2, "0");
    const minutes:string = now.getMinutes().toString().padStart(2, "0");
    const ampm:string = now.getHours() < 12 ? "am" : "pm";

    return (
        <div>
            <p>{hour}:{minutes} {ampm}</p>
        </div>
    );
};

export default Clock;
