import { inputdata } from "./inputsdata";

let Inputs = () => {
    return (
        <div>
            {inputdata.map((val, ind) => {
                if (!val.loginForm || !val.loginForm.labels || !Array.isArray(val.loginForm.labels) ) {
                    return (
                        <div key={ind}>
                            <h3>Data missing or incorrect</h3>
                        </div>
                    );
                }

                return (
                    <div key={ind}>
                        <h3>LoginForM</h3>
                        <div>
                           
                            {val.loginForm.labels.map((v, i) => (
                                <div key={i}>
                                    <label htmlFor={`input-${ind}-${i}`}>{v}</label>
                                    <div>
                            {val.loginForm.fields.map((v, i) => {
                                if (!v) {
                                    return <p key={i}>Field data not available</p>;
                                }
                               if(v.type.includes("email")){
                                return (
                                    <input
                                        // key={i}
                                        type={v.type}
                                        placeholder={v.placeholder}
                                        name={v.name}
                                    />
                                );
                               }else if(v.type.includes("password") ){
                                return (
                                    <input
                                        // key={i}
                                        type={v.type}
                                        placeholder={v.placeholder}
                                        name={v.name}
                                    />
                                )

                               }else if(v.name.includes("username") ){
                                return (
                                    <input
                                        // key={i}
                                        type={v.type}
                                        placeholder={v.placeholder}
                                        name={v.name}
                                    />
                                );
                            }
                            })}
                        </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Inputs;