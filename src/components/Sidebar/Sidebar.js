import React, { useState } from "react";
import "./Sidebar.css";
import { BiLogOut, BiHome, BiEnvelopeOpen,BiEnvelope, BiBell } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../redux/authSlice";
import { openMessage, closeMessage } from "../redux/messageSlice";

export const Sidebar = () => {
	const{message, setMessage} = useState(false)
	const toggle = () => {
		setMessage(!message ? dispatch(openMessage()) : dispatch(closeMessage()))
		console.log(toggle)
	}
	const toggley = () => {
		setMessage(message ? dispatch(openMessage()) : dispatch(closeMessage()))
		console.log(toggle)
	}

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const onLogout = () => {
		dispatch(logout());
		dispatch(reset());
		navigate("/");
	};
	return (
		<div className="sidebar">
			<div className="side">
				<div className="sidetop">
					<div className="img2"></div>
					<div>
						<h2>Chidi andrew</h2>
						<p>@chidi</p>
					</div>
				</div>
				<div className="links">
					<a href="#">
						<BiHome size={20} />
						<h2>Home</h2>
					</a>
					<a href="#">
						<BiBell size={20} />
						<h2>Notifications</h2>
					</a>
					<a href="#" onClick={toggle} >  
						<BiEnvelopeOpen  size={20} /> 
						<h2>Messages</h2>
					</a>
					<a href="#" onClick={toggley}>
						<BiEnvelope size={20} /> <h2>Close Message</h2>
					</a>
					<a href="#">
						<FiSettings size={20} /> <h2>Settings</h2>
					</a>
					<button onClick={onLogout}>
						<BiLogOut size={20} /> <h2>logout</h2>
					</button>
				</div>
				<div className="btn">
					<button className="btn1">Create post</button>
				</div>
			</div>
		</div>
	);
};
