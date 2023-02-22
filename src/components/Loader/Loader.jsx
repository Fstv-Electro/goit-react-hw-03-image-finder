import { Oval } from "react-loader-spinner";
import css from './Loader.module.css';

export default function Loader() {
    return (
        <div className={css.loader}>
            <Oval
                ariaLabel="Loading-indicator"
                height={100}
                width={100}
                strokeWidth={5}
                strokeWidthSecondary={1}
                color="blue"
                secondaryColor="purple"
            />
        </div>
    );
}