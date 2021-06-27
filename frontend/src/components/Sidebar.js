import React from "react";
import '../css/sidebar.css'

export const Sidebar = () => {
    return (
        <div class="wrapper">
            <nav id="sidebar">
                <div class="sidebar-header">
                    <h3>Bootstrap Sidebar</h3>
                </div>

                <ul class="list-unstyled components">
                    <p>Dummy Heading</p>

                    <li>
                        <a href="#">Home</a>
                    </li>

                    <li>
                        <a href="#">My courses</a>
                    </li>

                    <li>
                        <a href="#">My tasks</a>
                    </li>

                    <li>
                        <a href="#">Califications</a>
                    </li>

                    <li>
                        <a href="#">Extra</a>
                    </li>
                </ul>

            </nav>
            
    </div>
    )
}
