import React, { useState } from "react";
import "./Sidebar.css";
import { BiLogOut, BiHome, BiPalette } from "react-icons/bi";
import { AiFillBell, AiFillSetting } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout, reset } from "../redux/authSlice";

export const Sidebar = () => {
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
						<AiFillBell size={20} />
						<h2>Notifications</h2>
					</a>
					<a href="#">
						<FaEnvelope size={20} />
						<h2>Messages</h2>
					</a>
					<a href="#">
						<BiPalette size={20} /> <h2>Theme</h2>
					</a>
					<a href="#">
						<AiFillSetting size={20} /> <h2>Settings</h2>
					</a>
					<button onClick={onLogout} href="#">
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
