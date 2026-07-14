import Bou from './Bou';

const Cousin = ({name,asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Roton" && <Bou name="
                Razia" asset={asset}></Bou>
            }
        </div>
    );
};

export default Cousin;