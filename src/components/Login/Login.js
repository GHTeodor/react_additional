import React, {useState} from 'react';


const Login = () => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState("User");
    const [form, setForm] = useState({username: "", password: ""});
    const [passwordForChangeName] = useState(Math.random().toString());
    const [wrongPassword, setWrongPassword] = useState("");

    const handleClickOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const changeUName = () => {
        if (form.password === passwordForChangeName) {
            setUser(form.username);
            setWrongPassword("");
        } else setWrongPassword("Wrong password");
    };

    return (
        <>
            <button onClick={handleClickOpen} className="loginBTN">{user}</button>
            <div id="login" style={{display: open ? 'block' : 'none'}}>
                <button className="loginBTN1" onClick={handleClose}>X</button>
                <h1>Change username</h1>
                <p>Enter this pass to change username: <mark>{passwordForChangeName}</mark></p>
                <form onSubmit={e => e.preventDefault()}>
                    <input type="text" name="username" placeholder="username" maxLength={15}
                           onInput={(e) => setForm({username: e.target.value, password: form.password})}/>
                    <input type="password" name="password" placeholder="password"
                           onChange={(e) => setForm({password: e.target.value, username: form.username})}/>
                    <button onClick={changeUName}>Change name</button>
                </form>
                {wrongPassword && <u style={{color: "lightcoral"}}>wrongPassword</u>}
            </div>
        </>
    );
};

export {Login};