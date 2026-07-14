import { createContext } from "react";
import Grandpa from "./Grandpa";

export const AssestContext = createContext("");


const FamilyTree = () => {
    const asset = "diamond";
    const newAsset = "gold"
    return (
        <div className="family-tree">
            <h2>Family Tree</h2>
            <AssestContext.Provider value={newAsset}>
                <Grandpa asset={asset}></Grandpa>
            </AssestContext.Provider>
        </div>
    );
};

export default FamilyTree;