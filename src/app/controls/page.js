"use client"

import {React} from 'react'
import { useTheme } from '../context/ThemeContext';

// export async function generateMetadata({ params }) {
//     return {
//       title: "Site Controls: Theo Maurino"
//     };
// }


const SiteControlPage = () => {

    const {
        fontSize,
        setFontSize,
        fontFamily,
        setFontFamily,
        theme,
        setTheme,
      } = useTheme()
  
  return (
    <main id="site-control-panel-page">
        <h2 className="text-xl font-bold">Site Control Panel</h2>

        <div id="control-panel-controls">
                <button onClick={() => setFontSize(Math.max(10, fontSize - 2))}>A-</button>
                <button onClick={() => setFontSize(fontSize + 2)}>A+</button>

                <select
                    value={fontFamily}
                    onChange={(e) => setFontFamily(e.target.value)}
                >
                    <option value="sans-serif">Sans-Serif</option>
                    <option value="serif">Serif</option>
                    <option value="monospace">Monospace</option>
                </select>

                <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                >
                    <option value="light">Light Mode</option>
                    <option value="dark">Dark Mode</option>
                    <option value="contrast">Contrast Mode</option>
                </select>
        </div>
    </main>
  );
};

export default SiteControlPage;
