"use client";

import { useEffect, useRef } from "react";
import { animate, stagger } from "animejs";

// Real brand colors for each technology
export const techColors = {
  // Frontend
  electron: "#47848F",
  nextjs: "#000000",
  vite: "#646CFF",
  react: "#61DAFB",
  tailwind: "#06B6D4",
  typescript: "#3178C6",
  
  // Backend
  python: "#3776AB",
  fastapi: "#009688",
  flask: "#000000",
  
  // Databases
  mysql: "#4479A1",
  chromadb: "#FF6B6B",
  postgresql: "#4169E1",
  sqlite: "#003B57",
  
  // LLMs & AI
  openai: "#412991",
  ollama: "#000000",
  langchain: "#1C3C3C",
};

interface IconProps {
  className?: string;
  size?: number;
}

// Frontend Icons
export const ElectronIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
    fill={techColors.electron}
  >
    <circle cx="128" cy="128" r="40" />
    <ellipse cx="128" cy="128" rx="100" ry="40" fill="none" stroke={techColors.electron} strokeWidth="8" />
    <ellipse cx="128" cy="128" rx="100" ry="40" fill="none" stroke={techColors.electron} strokeWidth="8" transform="rotate(60 128 128)" />
    <ellipse cx="128" cy="128" rx="100" ry="40" fill="none" stroke={techColors.electron} strokeWidth="8" transform="rotate(-60 128 128)" />
  </svg>
);

export const NextjsIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 180 180"
    width={size}
    height={size}
    className={className}
  >
    <mask id="nextMask" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
      <circle cx="90" cy="90" r="90" fill="white" />
    </mask>
    <g mask="url(#nextMask)">
      <circle cx="90" cy="90" r="90" className="fill-black dark:fill-white" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        className="fill-white dark:fill-black"
      />
      <rect x="115" y="54" width="12" height="72" className="fill-white dark:fill-black" />
    </g>
  </svg>
);

export const ViteIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 410 404"
    width={size}
    height={size}
    className={className}
  >
    <path
      d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
      fill="url(#viteGrad1)"
    />
    <path
      d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 167.601C144.198 170.924 147.258 173.472 150.51 172.78L188.42 164.529C192.013 163.768 195.213 166.838 194.512 170.443L183.502 226.041C182.764 229.829 186.283 232.965 190.009 231.898L212.638 225.347C216.37 224.278 219.894 227.426 219.143 231.219L201.428 322.919C200.373 328.418 207.727 331.391 210.529 326.675L212.524 323.278L341.677 73.0281C343.768 68.9653 340.089 64.2985 335.65 65.1688L296.409 73.0373C292.602 73.7979 289.348 70.2807 290.256 66.4981L308.407 8.36379C309.322 4.56243 306.035 1.03399 302.208 1.82229L292.965 1.5744Z"
      fill="url(#viteGrad2)"
    />
    <defs>
      <linearGradient id="viteGrad1" x1="6.00017" y1="32.9999" x2="235" y2="344" gradientUnits="userSpaceOnUse">
        <stop stopColor="#41D1FF" />
        <stop offset="1" stopColor="#BD34FE" />
      </linearGradient>
      <linearGradient id="viteGrad2" x1="194.651" y1="8.81818" x2="236.076" y2="292.989" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFBD4F" />
        <stop offset="1" stopColor="#FF980E" />
      </linearGradient>
    </defs>
  </svg>
);

export const ReactIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="-11.5 -10.23174 23 20.46348"
    width={size}
    height={size}
    className={className}
  >
    <circle cx="0" cy="0" r="2.05" fill={techColors.react} />
    <g stroke={techColors.react} strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const TailwindIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 54 33"
    width={size}
    height={size}
    className={className}
    fill={techColors.tailwind}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
    />
  </svg>
);

export const TypeScriptIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
  >
    <rect width="128" height="128" rx="8" fill={techColors.typescript} />
    <path
      d="M22.67 47h99.67v73.67H22.67z"
      fill="none"
    />
    <path
      d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82.5 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.27H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"
      fill="white"
    />
  </svg>
);

// Backend Icons
export const PythonIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
  >
    <linearGradient id="pythonGrad1" x1="70.252" x2="170.659" y1="1237.476" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#5A9FD4" />
      <stop offset="1" stopColor="#306998" />
    </linearGradient>
    <linearGradient id="pythonGrad2" x1="209.474" x2="173.62" y1="1098.811" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#FFD43B" />
      <stop offset="1" stopColor="#FFE873" />
    </linearGradient>
    <path fill="url(#pythonGrad1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)" />
    <path fill="url(#pythonGrad2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)" />
  </svg>
);

export const FastAPIIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 154 154"
    width={size}
    height={size}
    className={className}
    fill={techColors.fastapi}
  >
    <circle cx="77" cy="77" r="77" />
    <path
      d="M81.375 18.667l-38.75 70H77.5l-3.875 46.666 38.75-70H77.5l3.875-46.666z"
      fill="white"
    />
  </svg>
);

export const FlaskIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 256 256"
    width={size}
    height={size}
    className={className}
  >
    <path
      d="M209.4 192.7c-12.8-15.5-33.2-28.3-55.6-38.9-14.8-7-21-11.1-21-21.2 0-8.4 5.6-15.2 16.8-15.2 15.5 0 25.8 10.7 40.6 10.7 11.1 0 17.6-6.3 17.6-16.9 0-21.8-31.3-39.3-58.2-39.3-41.3 0-66.3 23.2-66.3 58.9 0 17.6 6.3 34.5 19.7 47.9 21.1 21.1 52.4 37.3 74.2 58.2 7 6.7 14.8 15.5 14.8 26.5 0 13.4-11.1 24.5-24.5 24.5-18.3 0-32.4-14.1-47.9-14.1-10.6 0-17.6 6.3-17.6 16.9 0 21.8 29.9 40 58.9 40 41.3 0 66.3-23.2 66.3-58.9.1-27.9-12-47.6-17.8-79.1z"
      fill={techColors.flask}
      className="dark:fill-white"
    />
    <path
      d="M108.6 97.8L77.8 37.6c-4.9-9.5-16.8-13.4-26.5-8.5-9.5 4.9-13.4 16.8-8.5 26.5l71.9 139.2c3.2 6.3 9.5 9.9 16.5 9.9 3.2 0 6.3-.7 9.2-2.5 9.5-4.9 13.4-16.8 8.5-26.5l-40.3-78z"
      fill={techColors.flask}
      className="dark:fill-white"
    />
  </svg>
);

// Database Icons
export const MySQLIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
  >
    <path
      fill={techColors.mysql}
      d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.807 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.79-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.292-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513l-6.438-.39c-1.309-.581-2.67-2.28-3.902-3.121-4.91-3.354-17.474-10.64-21.119-1.171-2.299 5.974 3.44 11.802 5.462 14.834 1.419 2.128 3.239 4.512 4.292 6.83.692 1.527.818 3.065 1.367 4.682 1.355 3.99 2.537 8.424 4.294 12.098.886 1.851 1.864 3.806 2.928 5.464.639.992 1.73 1.429 1.952 2.929-1.097 1.534-1.161 3.915-1.757 5.855-2.686 8.746-1.672 19.605 2.146 26.048 1.17 1.972 3.925 6.212 7.609 4.584 3.223-1.424 2.503-5.834 3.317-9.756.185-.891.069-1.547.585-2.146v.195l3.513 7.023c2.603 4.19 7.199 8.562 11.125 11.514 2.034 1.53 3.634 4.176 6.244 5.073v-.196h-.195c-.511-.79-1.315-1.113-1.952-1.754-1.506-1.518-3.177-3.403-4.39-5.073-3.473-4.779-6.545-10.026-9.367-15.415-1.346-2.572-2.518-5.417-3.512-8.002-.386-.998-.381-2.506-1.171-3.121-1.084 1.677-2.678 3.029-3.513 4.976-1.335 3.112-1.506 6.912-1.952 10.929-.284.12-.158.038-.39.194-2.266-.544-3.064-2.882-3.903-4.877-2.117-5.034-2.51-13.139-.585-18.953.498-1.503 2.755-6.239 1.854-7.61-.438-1.436-1.887-2.269-2.731-3.318-1.044-1.297-2.086-2.999-2.928-4.488-2.188-3.869-3.209-8.208-5.465-12.098-1.079-1.861-2.903-3.747-4.097-5.658-.672-1.074-.997-2.707-1.953-3.317zM37.6 32.4c-.851-.017-1.457.077-2.146.195v.194h.195c.417.858 1.151 1.412 1.756 2.146l1.367 2.927.195-.195c.753-.532 1.097-1.38 1.171-2.732-.33-.345-.379-.779-.586-1.171-.281-.542-.829-.838-1.171-1.366h-.78z"
    />
  </svg>
);

export const ChromaDBIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
  >
    <circle cx="50" cy="50" r="45" fill={techColors.chromadb} />
    <circle cx="35" cy="40" r="12" fill="#FFD93D" />
    <circle cx="65" cy="40" r="12" fill="#6BCB77" />
    <circle cx="50" cy="65" r="12" fill="#4D96FF" />
    <path d="M38 50 L50 58 L62 50" stroke="white" strokeWidth="3" fill="none" />
  </svg>
);

export const PostgreSQLIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
  >
    <path
      d="M93.809 92.112c.785-6.533.55-7.492 5.416-6.433l1.235.108c3.742.17 8.637-.602 11.513-1.938 6.191-2.873 9.861-7.668 3.758-6.409-13.924 2.873-14.881-1.842-14.881-1.842 14.703-21.815 20.849-49.508 15.545-56.287-14.47-18.489-39.517-9.746-39.936-9.52l-.134.025c-2.751-.571-5.83-.912-9.289-.968-6.301-.104-11.082 1.652-14.709 4.402 0 0-44.683-18.409-42.604 23.151.442 8.841 12.672 66.898 27.26 49.362 5.332-6.412 10.484-11.834 10.484-11.834 2.558 1.699 5.622 2.567 8.834 2.255l.249-.212c-.078.796-.044 1.575.099 2.497-3.757 4.199-2.653 4.936-10.166 6.482-7.602 1.566-3.136 4.355-.221 5.084 3.535.884 11.712 2.136 17.238-5.598l-.22.882c1.474 1.18 1.375 8.477 1.583 13.69.208 5.214.558 10.079 1.621 12.948 1.063 2.868 2.317 10.256 12.191 8.14 8.252-1.764 14.561-4.309 15.136-27.985"
      fill="#336791"
    />
    <path
      d="M66.509 129.502c-.169-2.431-.349-5.193-.572-8.47-.262-3.854-.534-8.254-.718-12.548-.096-2.243-.168-4.397-.219-6.414-.102-3.962-.193-7.392-.448-10.273-.158-1.78-.372-3.305-.707-4.46-.204-.709-.477-1.266-.887-1.712-.458-.499-1.089-.934-1.93-1.309-1.668-.745-3.853-1.154-6.319-1.316-1.288-.084-2.656-.118-4.08-.078 2.065 1.217 3.661 2.76 4.829 4.574 1.308 2.028 2.07 4.378 2.433 6.914.322 2.248.333 4.645.113 7.066-.18 1.984-.5 4.005-.926 6.002-.251 1.178-.537 2.35-.854 3.507-.209.757-.432 1.512-.673 2.256-1.344 4.157-3.118 8.027-5.35 11.362-.254.38-.517.746-.789 1.099 3.106 1.06 6.598 1.549 10.268 1.38 5.322-.242 9.647-1.658 12.762-3.786-.407-.004-.787-.008-1.133-.011-.749-.006-1.397-.01-1.962-.018"
      fill="#ECF0F1"
    />
    <path
      d="M117.982 56.57c-3.67-.53-8.195-.242-10.916.527-1.139.321-2.168.738-3.064 1.272-.938.56-1.725 1.223-2.327 2.021-.68.902-1.146 1.978-1.361 3.229-.246 1.423-.183 3.066.183 4.912.408 2.06 1.163 4.403 2.364 6.921 1.057 2.22 2.477 4.609 4.294 7.005.994 1.312 2.092 2.627 3.299 3.917.934-1.01 1.729-2.097 2.335-3.255.778-1.485 1.284-3.08 1.492-4.749.168-1.342.151-2.73-.059-4.14-.203-1.368-.549-2.762-1.053-4.149-.458-1.264-1.049-2.521-1.793-3.729-.655-1.066-1.423-2.097-2.319-3.057-.792-.849-1.692-1.641-2.706-2.35.648-.234 1.324-.403 2.02-.511 1.462-.227 3.017-.211 4.588.002 2.389.326 4.844.946 7.228 1.75-.239-3.008-1.076-5.154-3.205-5.616z"
      fill="#336791"
    />
  </svg>
);

export const SQLiteIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 128 128"
    width={size}
    height={size}
    className={className}
  >
    <defs>
      <linearGradient id="sqlite-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#97D9F6" />
        <stop offset="50%" stopColor="#0F80CC" />
        <stop offset="100%" stopColor="#003B57" />
      </linearGradient>
    </defs>
    <path
      d="M102.881 42.839c-5.157-14.756-17.325-28.758-35.332-40.652a2.527 2.527 0 00-2.911.086c-11.556 8.896-18.432 20.106-19.913 32.441-.876 7.299-.178 14.066.993 19.56-4.162-2.043-8.5-3.304-12.627-2.907-4.655.45-8.753 2.924-11.845 7.15-.347.476-.463 1.08-.317 1.648.146.57.519 1.05 1.018 1.314 9.333 4.912 16.635 12.006 20.433 19.848a36.234 36.234 0 012.087 5.444c1.678 5.552 2.456 11.32 2.305 17.118l-.013.529-.026.528c-.043.835-.087 1.698-.087 2.478 0 .902-.063 1.928-.13 3.014-.186 2.959-.4 6.313.546 8.903a7.2 7.2 0 004.196 4.183 8.2 8.2 0 002.962.576c2.405 0 5.008-.951 7.532-2.753 3.168-2.263 6.155-5.738 8.63-10.047.162-.281.232-.604.2-.926l-2.91-29.792 5.283-5.082c3.84-3.712 5.916-9.328 5.69-15.393-.202-5.41-2.248-10.898-5.757-15.45l-.004-.006c-.04-.06-.082-.117-.126-.174a60.044 60.044 0 00-4.025-4.786c2.218-5.82 5.47-11.083 9.69-15.666l.037-.04.035-.04c1.217-1.442 2.495-2.784 3.82-4.018 5.9 5.03 10.792 10.664 14.583 16.809 6.21 10.063 9.105 20.594 8.37 30.46-.71 9.523-4.641 18.413-11.68 26.417-6.698 7.616-16.22 14.636-28.317 20.864a2.532 2.532 0 00-.52 4.164 2.536 2.536 0 002.354.593c13.142-3.411 24.743-9.132 34.512-17.016 10.176-8.209 17.39-18.053 21.441-29.254 3.967-10.967 4.66-22.57 2.06-34.509-2.556-11.737-8.117-23.19-16.546-34.078z"
      fill="url(#sqlite-grad)"
    />
    <path
      d="M63.127 55.783c-.08-2.149-.89-4.185-2.281-5.73-1.395-1.55-3.306-2.524-5.382-2.743a8.303 8.303 0 00-6.049 1.684 8.41 8.41 0 00-3.187 5.343c-.17.907-.212 1.835-.123 2.754.087.917.302 1.817.64 2.675a10.35 10.35 0 002.653 3.75c1.05.996 2.316 1.741 3.7 2.177a8.293 8.293 0 004.292.154c1.433-.328 2.763-.978 3.89-1.9a8.41 8.41 0 002.583-3.583c.563-1.398.78-2.908.696-4.421z"
      fill="white"
    />
  </svg>
);

// LLM Icons
export const OpenAIIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    fill={techColors.openai}
  >
    <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08-4.778 2.758a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
  </svg>
);

export const OllamaIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
  >
    <circle cx="50" cy="50" r="45" fill={techColors.ollama} className="dark:fill-white" />
    <ellipse cx="50" cy="55" rx="25" ry="20" fill="white" className="dark:fill-black" />
    <circle cx="42" cy="50" r="4" fill={techColors.ollama} className="dark:fill-black" />
    <circle cx="58" cy="50" r="4" fill={techColors.ollama} className="dark:fill-black" />
    <ellipse cx="50" cy="62" rx="8" ry="5" fill={techColors.ollama} className="dark:fill-black" />
  </svg>
);

export const LangChainIcon = ({ className, size = 40 }: IconProps) => (
  <svg
    viewBox="0 0 100 100"
    width={size}
    height={size}
    className={className}
  >
    <rect x="10" y="10" width="80" height="80" rx="10" fill={techColors.langchain} />
    <path
      d="M30 50 L45 35 L45 45 L70 45 L70 55 L45 55 L45 65 Z"
      fill="white"
    />
    <circle cx="75" cy="35" r="8" fill="#2DD4BF" />
    <circle cx="75" cy="65" r="8" fill="#2DD4BF" />
  </svg>
);

// Animated Tech Grid Component
interface TechGridProps {
  className?: string;
}

export const TechGrid = ({ className }: TechGridProps) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (gridRef.current) {
      const items = gridRef.current.querySelectorAll(".tech-item");
      animate(items, {
        opacity: [0, 1],
        translateY: [30, 0],
        scale: [0.8, 1],
        delay: stagger(80),
        easing: "easeOutExpo",
        duration: 800,
      });
    }
  }, []);

  const technologies = [
    // Frontend
    { name: "Electron", icon: ElectronIcon, category: "Frontend" },
    { name: "Next.js", icon: NextjsIcon, category: "Frontend" },
    { name: "Vite", icon: ViteIcon, category: "Frontend" },
    { name: "React", icon: ReactIcon, category: "Frontend" },
    { name: "Tailwind", icon: TailwindIcon, category: "Frontend" },
    { name: "TypeScript", icon: TypeScriptIcon, category: "Frontend" },
    // Backend
    { name: "Python", icon: PythonIcon, category: "Backend" },
    { name: "FastAPI", icon: FastAPIIcon, category: "Backend" },
    { name: "Flask", icon: FlaskIcon, category: "Backend" },
    // Databases
    { name: "MySQL", icon: MySQLIcon, category: "Databases" },
    { name: "ChromaDB", icon: ChromaDBIcon, category: "Databases" },
    { name: "PostgreSQL", icon: PostgreSQLIcon, category: "Databases" },
    // LLMs
    { name: "OpenAI", icon: OpenAIIcon, category: "LLMs & AI" },
    { name: "Ollama", icon: OllamaIcon, category: "LLMs & AI" },
    { name: "LangChain", icon: LangChainIcon, category: "LLMs & AI" },
  ];

  return (
    <div ref={gridRef} className={className}>
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="tech-item opacity-0 flex flex-col items-center gap-2 p-4"
        >
          <tech.icon size={48} />
          <span className="text-sm font-medium text-text-secondary dark:text-gray-400">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};
