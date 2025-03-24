import { inputdata } from "./inputsdata";

let Fields = () => {
    return (
        <div>
            {inputdata.map((val, ind) => {
                const { loginForm } = val;

                if (!loginForm || !loginForm.fields || !Array.isArray(loginForm.fields)) {
                    return (
                        <div key={ind}>
                            <h3>Data missing or incorrect</h3>
                        </div>
                    );
                }

                return (
                    <div key={ind}>
                        <h3>Fields</h3>
                        <div>
                            {loginForm.fields.map((v, i) => {
                                if (!v) {
                                    return <p key={i}>Field data not available</p>;
                                }
                                return (
                                    <input
                                        key={i}
                                        type={v.type}
                                        placeholder={v.placeholder}
                                        name={v.name}
                                    />
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Fields;