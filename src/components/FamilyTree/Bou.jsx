import { useContext } from "react";
import { AssestContext } from "./FamilyTree";

const Bou = ({asset, name}) => {

    const newAsset = useContext(AssestContext)
    return (
        <div>
            <h3>{name}</h3>
            <p>Asset: {asset}</p>
            <p>NewAsset: {newAsset}</p>
        </div>
    );
};

export default Bou;