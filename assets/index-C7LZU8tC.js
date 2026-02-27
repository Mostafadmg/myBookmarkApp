(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();function m(e=""){return`/myBookmarkApp/${String(e).replace(/^\/+/,"")}`}async function B(){try{const e=m("data.json"),t=await fetch(e,{cache:"no-store"});if(!t.ok)throw new Error(`Failed to load data.json (${t.status})`);return await t.json()}catch(e){return console.error(e),{bookmarks:[]}}}function x(e={}){return{id:crypto.randomUUID(),title:"",description:"",url:"",tags:[],pinned:!1,isArchived:!1,favicon:"",createdAt:Date.now(),visitCount:0,lastVisited:null,...e}}const d={close:`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10.7998 0.799999L0.799805 10.8M0.799805 0.799999L10.7998 10.8" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`,modalClose:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M15 5L5 15M5 5L15 15" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`,home:`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none" class="nav-icon">
                    <path d="M4.96647 13.0776H11.6331M7.48122 1.21429L1.8293 5.61023C1.45149 5.90408 1.26259 6.05101 1.12649 6.23501C1.00594 6.398 0.916139 6.58161 0.861494 6.77684C0.799805 6.99723 0.799805 7.23654 0.799805 7.71517V13.7443C0.799805 14.6777 0.799805 15.1444 0.98146 15.5009C1.14125 15.8145 1.39622 16.0695 1.70982 16.2293C2.06634 16.4109 2.53305 16.4109 3.46647 16.4109H13.1331C14.0666 16.4109 14.5333 16.4109 14.8898 16.2293C15.2034 16.0695 15.4584 15.8145 15.6181 15.5009C15.7998 15.1444 15.7998 14.6777 15.7998 13.7443V7.71517C15.7998 7.23654 15.7998 6.99723 15.7381 6.77684C15.6835 6.58161 15.5937 6.398 15.4731 6.23501C15.337 6.05101 15.1481 5.90408 14.7703 5.61023L9.11839 1.21429C8.82562 0.986583 8.67924 0.872727 8.51759 0.828962C8.37497 0.790345 8.22464 0.790345 8.08202 0.828962C7.92037 0.872727 7.77399 0.986583 7.48122 1.21429Z" stroke="var(--color-text)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,archived:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="nav-icon">
                    <path d="M3.33366 6.66383C3.19699 6.6603 3.09774 6.65239 3.00851 6.63464C2.34736 6.50313 1.83053 5.9863 1.69902 5.32515C1.66699 5.16415 1.66699 4.97055 1.66699 4.58333C1.66699 4.19612 1.66699 4.00251 1.69902 3.84152C1.83053 3.18037 2.34736 2.66354 3.00851 2.53202C3.16951 2.5 3.36311 2.5 3.75033 2.5H16.2503C16.6375 2.5 16.8311 2.5 16.9921 2.53202C17.6533 2.66354 18.1701 3.18037 18.3016 3.84152C18.3337 4.00251 18.3337 4.19612 18.3337 4.58333C18.3337 4.97055 18.3337 5.16415 18.3016 5.32515C18.1701 5.9863 17.6533 6.50313 16.9921 6.63464C16.9029 6.65239 16.8037 6.6603 16.667 6.66383M8.33366 10.8333H11.667M3.33366 6.66667H16.667V13.5C16.667 14.9001 16.667 15.6002 16.3945 16.135C16.1548 16.6054 15.7724 16.9878 15.302 17.2275C14.7672 17.5 14.0671 17.5 12.667 17.5H7.33366C5.93353 17.5 5.23346 17.5 4.69868 17.2275C4.22828 16.9878 3.84583 16.6054 3.60614 16.135C3.33366 15.6002 3.33366 14.9001 3.33366 13.5V6.66667Z" stroke="var(--color-text)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,sort:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M14.1667 3.33333V16.6667M14.1667 16.6667L10.8333 13.3333M14.1667 16.6667L17.5 13.3333M5.83333 16.6667V3.33333M5.83333 3.33333L2.5 6.66667M5.83333 3.33333L9.16667 6.66667" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`,tick:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M16.6663 5L7.49967 14.1667L3.33301 10" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`,views:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>`,time:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g>
                    <path d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>`,date:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,pin:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>`,menu:`<svg xmlns="http://www.w3.org/2000/svg" width="17" height="12" viewBox="0 0 17 12" fill="none">
                  <path d="M0.799805 5.8H15.7998M0.799805 0.799999H15.7998M0.799805 10.8H15.7998" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>`,search:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#4C5C59" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,add:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.0003 4.16667V15.8333M4.16699 10H15.8337" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>`,palette:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667C9.10473 14.6667 10.0002 13.7713 10.0002 12.6667V12.3334C10.0002 12.0238 10.0002 11.869 10.0173 11.739C10.1354 10.8415 10.8416 10.1353 11.7391 10.0172C11.8691 10 12.0239 10 12.3335 10H12.6668C13.7714 10 14.6668 9.10461 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004Z" stroke="#4C5C59" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M4.66683 8.66671C5.03502 8.66671 5.3335 8.36823 5.3335 8.00004C5.3335 7.63185 5.03502 7.33337 4.66683 7.33337C4.29864 7.33337 4.00016 7.63185 4.00016 8.00004C4.00016 8.36823 4.29864 8.66671 4.66683 8.66671Z" stroke="#4C5C59" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.6668 6.00004C11.035 6.00004 11.3335 5.70156 11.3335 5.33337C11.3335 4.96518 11.035 4.66671 10.6668 4.66671C10.2986 4.66671 10.0002 4.96518 10.0002 5.33337C10.0002 5.70156 10.2986 6.00004 10.6668 6.00004Z" stroke="#4C5C59" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.66683 5.33337C7.03502 5.33337 7.3335 5.0349 7.3335 4.66671C7.3335 4.29852 7.03502 4.00004 6.66683 4.00004C6.29864 4.00004 6.00016 4.29852 6.00016 4.66671C6.00016 5.0349 6.29864 5.33337 6.66683 5.33337Z" stroke="#4C5C59" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`,sun:`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M7.00033 1.16663V2.33329M7.00033 11.6666V12.8333M2.33366 6.99996H1.16699M3.68356 3.68319L2.8586 2.85824M10.3171 3.68319L11.142 2.85824M3.68356 10.3191L2.8586 11.1441M10.3171 10.3191L11.142 11.1441M12.8337 6.99996H11.667M9.91699 6.99996C9.91699 8.61079 8.61116 9.91663 7.00033 9.91663C5.38949 9.91663 4.08366 8.61079 4.08366 6.99996C4.08366 5.38913 5.38949 4.08329 7.00033 4.08329C8.61116 4.08329 9.91699 5.38913 9.91699 6.99996Z" stroke="#051513" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`,moon:`<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                          <path d="M12.2902 7.01504C11.487 8.42396 9.97106 9.37387 8.23324 9.37387C5.65591 9.37387 3.56657 7.28453 3.56657 4.7072C3.56657 2.96924 4.51663 1.45317 5.92573 0.650024C2.96559 0.930692 0.649902 3.42345 0.649902 6.45706C0.649902 9.67872 3.26157 12.2904 6.48324 12.2904C9.51669 12.2904 12.0093 9.97496 12.2902 7.01504Z" stroke="#051513" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`,logout:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M14.25 16.5L18.75 12M18.75 12L14.25 7.5M18.75 12H9.75" stroke="#051513" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.5 4.5H7.5A2.25 2.25 0 0 0 5.25 6.75v10.5A2.25 2.25 0 0 0 7.5 19.5h3" stroke="#051513" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`,dots:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`,visit:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333" stroke="#B1B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`,copy:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3.3335 10.0002C2.71224 10.0002 2.40161 10.0002 2.15658 9.89867C1.82988 9.76334 1.57032 9.50378 1.43499 9.17707C1.3335 8.93205 1.3335 8.62142 1.3335 8.00016V3.46683C1.3335 2.72009 1.3335 2.34672 1.47882 2.06151C1.60665 1.81063 1.81063 1.60665 2.06151 1.47882C2.34672 1.3335 2.72009 1.3335 3.46683 1.3335H8.00016C8.62142 1.3335 8.93205 1.3335 9.17707 1.43499C9.50378 1.57032 9.76334 1.82988 9.89867 2.15658C10.0002 2.40161 10.0002 2.71224 10.0002 3.3335M8.1335 14.6668H12.5335C13.2802 14.6668 13.6536 14.6668 13.9388 14.5215C14.1897 14.3937 14.3937 14.1897 14.5215 13.9388C14.6668 13.6536 14.6668 13.2802 14.6668 12.5335V8.1335C14.6668 7.38676 14.6668 7.01339 14.5215 6.72818C14.3937 6.47729 14.1897 6.27332 13.9388 6.14549C13.6536 6.00016 13.2802 6.00016 12.5335 6.00016H8.1335C7.38676 6.00016 7.01339 6.00016 6.72818 6.14549C6.47729 6.27332 6.27332 6.47729 6.14549 6.72818C6.00016 7.01339 6.00016 7.38676 6.00016 8.1335V12.5335C6.00016 13.2802 6.00016 13.6536 6.14549 13.9388C6.27332 14.1897 6.47729 14.3937 6.72818 14.5215C7.01339 14.6668 7.38676 14.6668 8.1335 14.6668Z" stroke="#B1B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`,pinSmall:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M8.00012 10.0002L8.00012 14.6668M5.33346 4.87225V6.29266C5.33346 6.43134 5.33346 6.50068 5.31985 6.567C5.30777 6.62585 5.2878 6.68278 5.26047 6.73628C5.22966 6.79657 5.18635 6.85071 5.09972 6.959L4.0532 8.26715C3.60937 8.82194 3.38746 9.09933 3.38721 9.33278C3.38699 9.5358 3.4793 9.72787 3.63797 9.85452C3.82042 10.0002 4.17566 10.0002 4.88612 10.0002H11.1141C11.8246 10.0002 12.1798 10.0002 12.3623 9.85452C12.5209 9.72787 12.6133 9.5358 12.613 9.33278C12.6128 9.09933 12.3909 8.82194 11.947 8.26715L10.9005 6.959C10.8139 6.85071 10.7706 6.79657 10.7398 6.73628C10.7125 6.68278 10.6925 6.62585 10.6804 6.567C10.6668 6.50068 10.6668 6.43134 10.6668 6.29266V4.87225C10.6668 4.7955 10.6668 4.75713 10.6711 4.71928C10.675 4.68566 10.6814 4.65239 10.6903 4.61974C10.7003 4.58299 10.7146 4.54736 10.7431 4.4761L11.415 2.79631C11.611 2.30625 11.709 2.06123 11.6682 1.86453C11.6324 1.69252 11.5302 1.54157 11.3838 1.4445C11.2163 1.3335 10.9524 1.3335 10.4246 1.3335H5.57563C5.04782 1.3335 4.78391 1.3335 4.61646 1.4445C4.47003 1.54157 4.36783 1.69252 4.33209 1.86453C4.29122 2.06123 4.38923 2.30625 4.58525 2.79631L5.25717 4.4761C5.28567 4.54736 5.29992 4.58299 5.30995 4.61974C5.31886 4.65239 5.32526 4.68566 5.32912 4.71928C5.33346 4.75713 5.33346 4.7955 5.33346 4.87225Z" stroke="#B1B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`,edit:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M7.3335 2.66666H4.5335C3.41339 2.66666 2.85334 2.66666 2.42552 2.88464C2.04919 3.07639 1.74323 3.38235 1.55148 3.75867C1.3335 4.1865 1.3335 4.74655 1.3335 5.86666V11.4667C1.3335 12.5868 1.3335 13.1468 1.55148 13.5746C1.74323 13.951 2.04919 14.2569 2.42552 14.4487C2.85334 14.6667 3.41339 14.6667 4.5335 14.6667H10.1335C11.2536 14.6667 11.8137 14.6667 12.2415 14.4487C12.6178 14.2569 12.9238 13.951 13.1155 13.5746C13.3335 13.1468 13.3335 12.5868 13.3335 11.4667V8.66666M5.33348 10.6667H6.44984C6.77596 10.6667 6.93902 10.6667 7.09247 10.6298C7.22852 10.5972 7.35858 10.5433 7.47788 10.4702C7.61243 10.3877 7.72773 10.2724 7.95833 10.0418L14.3335 3.66666C14.8858 3.11437 14.8858 2.21894 14.3335 1.66666C13.7812 1.11437 12.8858 1.11437 12.3335 1.66665L5.95832 8.04182C5.72772 8.27242 5.61241 8.38772 5.52996 8.52228C5.45685 8.64157 5.40298 8.77163 5.37032 8.90768C5.33348 9.06113 5.33348 9.22419 5.33348 9.55031V10.6667Z" stroke="#B1B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>`,archiveSmall:`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M2.66683 5.33106C2.55749 5.32824 2.47809 5.32191 2.40671 5.30771C1.87779 5.2025 1.46432 4.78904 1.35912 4.26012C1.3335 4.13132 1.3335 3.97644 1.3335 3.66667C1.3335 3.3569 1.3335 3.20201 1.35912 3.07321C1.46432 2.54429 1.87779 2.13083 2.40671 2.02562C2.53551 2 2.69039 2 3.00016 2H13.0002C13.3099 2 13.4648 2 13.5936 2.02562C14.1225 2.13083 14.536 2.54429 14.6412 3.07321C14.6668 3.20201 14.6668 3.3569 14.6668 3.66667C14.6668 3.97644 14.6668 4.13132 14.6412 4.26012C14.536 4.78904 14.1225 5.2025 13.5936 5.30771C13.5222 5.32191 13.4428 5.32824 13.3335 5.33106M6.66683 8.66667H9.3335M2.66683 5.33333H13.3335V10.8C13.3335 11.9201 13.3335 12.4802 13.1155 12.908C12.9238 13.2843 12.6178 13.5903 12.2415 13.782C11.8137 14 11.2536 14 10.1335 14H5.86683C4.74672 14 4.18667 14 3.75885 13.782C3.38252 13.5903 3.07656 13.2843 2.88482 12.908C2.66683 12.4802 2.66683 11.9201 2.66683 10.8V5.33333Z" stroke="#B1B9B9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`,unarchive:`<svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
  <path d="M0.799805 6.63333C0.799805 6.63333 2.47062 4.35685 3.828 2.99854C5.18538 1.64022 7.06114 0.799999 9.13314 0.799999C13.2753 0.799999 16.6331 4.15786 16.6331 8.3C16.6331 12.4421 13.2753 15.8 9.13314 15.8C5.71389 15.8 2.82906 13.5119 1.92628 10.3833M0.799805 6.63333V1.63333M0.799805 6.63333H5.7998" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,delete:`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.5 2.5H12.5M2.5 5H17.5M15.8333 5L15.2489 13.7661C15.1612 15.0813 15.1174 15.7389 14.8333 16.2375C14.5833 16.6765 14.206 17.0294 13.7514 17.2497C13.235 17.5 12.5759 17.5 11.2578 17.5H8.74221C7.42409 17.5 6.76503 17.5 6.24861 17.2497C5.79396 17.0294 5.41674 16.6765 5.16665 16.2375C4.88259 15.7389 4.83875 15.0813 4.75107 13.7661L4.16667 5M8.33333 8.75V12.9167M11.6667 8.75V12.9167" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`},M=[{value:"recently-added",label:"Recently added"},{value:"recently-visited",label:"Recently visited"},{value:"most-visited",label:"Most visited"}];function $(){return`
<section class="cards">
    <header class="cards__header">
        <h1 class="cards__header-title text-1">All Bookmarks</h1>

        <div class="sortmenu" data-state="closed">
            <button class="sort-btn text-3 sortmenu__trigger" type="button" data-action="sort" aria-haspopup="true" aria-expanded="false" aria-controls="sortmenu-panel">
                ${d.sort}
                <span>Sort by</span>
            </button>

            <div class="sortmenu__panel" id="sortmenu-panel" data-state="closed" aria-label="Sort bookmarks">
                ${L()}
            </div>
        </div>
    </header>

    <!-- cards start here -->
    <section class="cards__container">
        ${v()}
    </section>
</section>
`}function L(){return M.map(e=>{const t=i.selectedSort===e.value;return`
<button class="sortmenu__option text-3${t?" is-active":""}" type="button" data-action="set-sort" data-sort-value="${e.value}" aria-pressed="${t}">
    <span>${e.label}</span>
    <span class="sortmenu__tick">${d.tick}</span>
</button>
`}).join("")}function v(){return j().map(t=>{const r=`cardmenu-panel-${t.id}`,o=t.isArchived?`<button class="cardmenu__item" role="menuitem" type="button" data-action="open-unarchive-confirm">
    ${d.unarchive}
    <span>Unarchive</span>
</button>`:`<button class="cardmenu__item" role="menuitem" type="button" data-action="open-archive-confirm">
    ${d.archiveSmall}
    <span>Archive</span>
</button>`,a=`<button class="cardmenu__item" role="menuitem" type="button" data-action="delete-modal-open">
    ${d.delete}
    <span>Delete</span>
</button>`,n=` <button class="cardmenu__item" role="menuitem" type="button" data-action="edit-bookmark">
    ${d.edit}
    <span>Edit</span>
</button>`,s=` <button class="cardmenu__item" role="menuitem" type="button" data-action="toggle-pin-bookmark">
    ${d.pinSmall}
    <span>${t.pinned?"Unpin":"Pin"}</span>
</button>
`;return`
<div class="card__item" data-bookmark-id="${t.id}">
    <div class="card__content">
        <div class="card__header">
            <!-- 1st item header -->
            <div class="card__topic">
                <div class="card__favicon">
                    <img src="${t.favicon}" alt="codepen" />
                </div>
                <!-- 2nd-item header -->
                <div class="card__title">
                    <h2 class="text-2">${t.title}</h2>
                    <p class="card__url text-5">${t.url}</p>
                </div>
            </div>

            <!-- 3rd-item header -->
            <div class="cardmenu" data-state="closed">
                <button class="card-btn cardmenu__trigger" type="button" data-bookmark-id="${t.id}" data-action="toggle-cardmenu" aria-haspopup="menu" aria-expanded="false" aria-controls="${r}">
                    ${d.dots}
                </button>

                <div class="cardmenu__panel" id="${r}" aria-label="Bookmark actions">
                    <button class="cardmenu__item" role="menuitem" type="button" data-action="visit-bookmark">
                        ${d.visit}
                        <span>Visit</span>
                    </button>

                    <button class="cardmenu__item" role="menuitem" type="button" data-action="copy-bookmark-url">
                        ${d.copy}
                        <span>Copy URL</span>
                    </button>

                    ${t.isArchived?"":s}
                    ${t.isArchived?a:n}

                    ${o}

                </div>
            </div>
        </div>

        <div class="card__divider"></div>

        <div class="card__description text-4">
            ${t.description}
        </div>

        <div class="card__tags text-5">

            ${t.tags.map(c=>`<span class="card__tag-items">${c}</span>`).join("")}

        </div>
    </div>

    <div class="card__footer">
        <div class="card__info">
            <div class="card__views card-info" data-tooltip="Visited ${t.visitCount} times">
                ${d.views}<span class="card__views-value text-5">${t.visitCount}</span>
            </div>

            <div class="card__time card-info" data-tooltip="Created on ${k(t.createdAt)}">
                ${d.time}<span class="card__time-value text-5">${k(t.createdAt)}</span>
            </div>

            <div class="card__date card-info" data-tooltip="${t.lastVisited?`Last visited on ${k(t.lastVisited)}`:" Never visited"}">
                <span class="card__time-date">
                    ${d.date}
                </span>
                <span class="card__date-value text-5">${t.lastVisited?k(t.lastVisited):"Never visited"}</span>
            </div>
        </div>

        ${t.isArchived?'<div class="card__archived">Archived</div>':t.pinned?` <div class="card__pinned">
            ${d.pin}
        </div>`:""}

    </div>
</div>

`}).join("")}function S(){const{bookmarks:e,theme:t}=i;localStorage.setItem("bookmarkApp",JSON.stringify({bookmarks:e,theme:t}))}function A(){const e=localStorage.getItem("bookmarkApp");return e?JSON.parse(e):null}function u(){document.querySelector(".cards__container").innerHTML=v(),document.querySelector(".sidebar").outerHTML=C(),S()}const i={theme:"light",isMobileSidebarOpen:!1,selectedTags:[],selectedSort:"recently-added",searchQuery:"",activeView:"main",bookmarks:[],editingBookmarkId:null,archivingBookmarkId:null,deletingBookmarkId:null,unarchivingBookmarkId:null};function V(){let e={};return i.bookmarks.forEach(t=>{t.tags.forEach(r=>{e[r]?e[r]++:e[r]=1})}),e}async function H(){const e=A();if(e)i.bookmarks=e.bookmarks,i.theme=e.theme;else{const t=await B();i.bookmarks=t.bookmarks}}function j(){const e=i.activeView==="archive"?i.bookmarks.filter(a=>a.isArchived):i.bookmarks.filter(a=>!a.isArchived),t=i.searchQuery?e.filter(a=>a.title.toLowerCase().includes(i.searchQuery.toLocaleLowerCase())):[...e];return(i.selectedTags.length===0?[...t]:[...t].filter(a=>a.tags.some(n=>i.selectedTags.includes(n)))).sort((a,n)=>{if(a.pinned!==n.pinned)return a.pinned?-1:1;switch(i.selectedSort){case"recently-added":return new Date(n.createdAt)-new Date(a.createdAt);case"recently-visited":return new Date(n.lastVisited)-new Date(a.lastVisited);case"most-visited":return n.visitCount-a.visitCount}})}function k(e){const t=new Date(e);return new Intl.DateTimeFormat("en-GB",{day:"2-digit",month:"short",year:"numeric"}).format(t)}function I(e){i.bookmarks=i.bookmarks.filter(t=>t.id!==e),u()}function C(){const e=i.activeView==="main",t=i.activeView==="archive";return`
<div id="sidebar-panel" class="sidebar${i.isMobileSidebarOpen?" open":""}" aria-hidden="${String(!i.isMobileSidebarOpen)}">
    <div class="sidebar__header">
        <img class="sidebar__logo sidebar__logo--light" src="${m("assets/images/logo-light-theme.svg")}" alt="Bookmark Manager" />
        <img class="sidebar__logo sidebar__logo--dark" src="${m("assets/images/logo-dark-theme.svg")}" alt="Bookmark Manager" />
        <button class="sidebar-closeBtn" type="button" data-action="close-sidebar">
            ${d.close}
        </button>
    </div>
    <section class="sidebar__content">
        <div class="sidebar__navigation text-3">
            <button class="sidebar__homeBtn${e?" is-active":""}" type="button" data-action="navigate-home" ${e?'aria-current="page"':""}>
                ${d.home}
                <span>Home</span>
            </button>
            <button class="sidebar__archivedBtn${t?" is-active":""}" type="button" data-action="navigate-archived" ${t?'aria-current="page"':""}>
                ${d.archived}<span>Archived</span>
            </button>
        </div>
        <div class="sidebar_tag text-5">
            <div class="sidebar__tag-subheading text-5">TAGS</div>
            <button class="reset-btn" type="button" data-action="reset-tag">Reset</button>
        </div>
        <ul class="sidebar__tagList text-3">
            ${q()}
        </ul>
    </section>
</div>
`}function q(){const e=V();return Object.entries(e).map(([t,r])=>{const o=i.selectedTags.includes(t);return`
<li class="sidebar__tagItem ${o?" is-selected":""}" role="checkbox" data-action="filter-tag" aria-checked="${o?" true":"false"}" data-tag="${t}">
    <div class="sidebar__container">
        <div class="sidebar__icon"></div>
        <p class="sidebar__text">${t}</p>
    </div>
    <div class="sidebar__badge text-5">${r}</div>
</li>
`}).join("")}function _(e){return`https://www.google.com/s2/favicons?domain=${new URL(e).hostname}&sz=64`}function T(){const e=document.querySelector(".addbookmark__input"),t=document.querySelector(".addbookmark__textarea"),r=document.getElementById("addbookmark-url-input"),o=document.getElementById("addbookmark-tags-input");let a=!0;return!e||!t||!r||!o?void 0:([{input:e,validate:s=>s.trim()!==""},{input:t,validate:s=>s.trim()!==""},{input:r,validate:s=>{try{return new URL(s),!0}catch{return!1}}},{input:o,validate:s=>s.trim()!==""}].forEach(({input:s,validate:c})=>{c(s.value)?D(s):(E(s),a=!1)}),a)}function g(){const e=document.querySelector(".addbookmark__input"),t=document.querySelector(".addbookmark__textarea"),r=document.getElementById("addbookmark-url-input"),o=document.getElementById("addbookmark-tags-input");if(!T())return;const n=x({title:e.value,description:t.value,url:r.value,tags:o.value.split(",").map(c=>c.trim()).filter(c=>c!==""),favicon:_(r.value)}),s=i.bookmarks.find(c=>c.id===i.editingBookmarkId);s?(s.title=e.value,s.description=t.value,s.url=r.value,s.tags=o.value.split(",").map(c=>c.trim()).filter(c=>c!==""),s.favicon=_(r.value)):i.bookmarks.push(n),u(),b()}function b(){const e=document.querySelector(".addbookmark__input"),t=document.querySelector(".addbookmark__textarea"),r=document.getElementById("addbookmark-url-input"),o=document.getElementById("addbookmark-tags-input");e.value="",t.value="",r.value="",o.value="",i.editingBookmarkId=null,document.querySelectorAll(".addbookmark__field").forEach(a=>a.classList.remove("error"))}function E(e){e.closest(".addbookmark__field").classList.add("error")}function D(e){e.closest(".addbookmark__field").classList.remove("error")}function Z(){return`
    <div class="modal-root" id="modal-root" >
        <section class="addbookmark" data-state="closed" aria-hidden="true">
          <button
            class="addbookmark__backdrop"
            type="button"
            data-action="close-addbookmark"
            aria-label="Close add bookmark dialog"
          ></button>

          <div
            class="addbookmark__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="addbookmark-title"
            aria-describedby="addbookmark-description"
          >
            <div class="addbookmark__header">
              <div class="addbookmark__heading">
                <h2 class="addbookmark__title" id="addbookmark-title">Add Bookmark</h2>
                <p class="addbookmark__intro" id="addbookmark-description">
                  Update your saved link details - change the title, description, URL, or
                  tags anytime.
                </p>
              </div>

              <button
                class="addbookmark__closeBtn"
                type="button"
                data-action="close-addbookmark"
                aria-label="Close dialog"
              >
                ${d.modalClose}
              </button>
            </div>

            <form class="addbookmark__form" novalidate>
              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-title-input">
                    Title <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter a valid title</span>
                </div>
                <div class="addbookmark__control">
                  <input
                    class="addbookmark__input"
                    id="addbookmark-title-input"
                    name="title"
                    type="text"
                    placeholder="e.g. Frontend Mentor"
                    required
                  />
                </div>
              </div>

              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-description-input">
                    Description <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter a valid description</span>
                </div>
                <div class="addbookmark__control addbookmark__control--textarea">
                  <textarea
                    class="addbookmark__textarea"
                    id="addbookmark-description-input"
                    name="description"
                    rows="4"
                    maxlength="280"
                    placeholder="e.g. A platform for improving front-end skills by building real projects."
                    aria-describedby="addbookmark-description-count"
                    required
                  ></textarea
                  >
                </div>
                <div class="addbookmark__meta">
                  <span class="addbookmark__counter" id="addbookmark-description-count"
                    >0/280</span
                  >
                </div>
              </div>

              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-url-input">
                    Website URL <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter a valid URL</span>
                </div>
                <div class="addbookmark__control">
                  <input
                    class="addbookmark__input"
                    id="addbookmark-url-input"
                    name="url"
                    type="url"
                    placeholder="e.g. https://www.example.com"
                    required
                  />
                </div>
              </div>

              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-tags-input">
                    Tags <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter valid tags</span>
                </div>
                <div class="addbookmark__control">
                  <input
                    class="addbookmark__input"
                    id="addbookmark-tags-input"
                    name="tags"
                    type="text"
                    placeholder="e.g. Design, CSS, Tools"
                    required
                  />
                </div>
              </div>

              <div class="addbookmark__actions">
                <button
                  class="addbookmark__btn addbookmark__btn--ghost"
                  type="button"
                  data-action="cancel-addbookmark"
                >
                  Cancel
                </button>
                <button
                  class="addbookmark__btn addbookmark__btn--primary"
                  type="submit"
                  data-action="save-addbookmark"
                >
                  Add Bookmark
                </button>
              </div>
            </form>
          </div>
        </section>

        <section
          class="authmodal authmodal--signup"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="authmodal__backdrop"
            type="button"
            data-action="close-authmodal"
            aria-label="Close authentication dialog"
          ></button>

          <div
            class="authmodal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="authmodal-title"
            aria-describedby="authmodal-description"
          >
            <div class="authmodal__brand">
              <img
                class="authmodal__logo authmodal__logo--light"
                src="${m("assets/images/logo-light-theme.svg")}"
                alt="Bookmark Manager"
              />
              <img
                class="authmodal__logo authmodal__logo--dark"
                src="${m("assets/images/logo-dark-theme.svg")}"
                alt="Bookmark Manager"
              />
            </div>

            <div class="authmodal__header">
              <h2 class="authmodal__title" id="authmodal-title">Create your account</h2>
              <p class="authmodal__intro" id="authmodal-description">
                Join us and start saving your favorite links - organized, searchable, and
                always within reach.
              </p>
            </div>

            <form class="authmodal__form" novalidate>
              <div class="authmodal__field">
                <label class="authmodal__label" for="auth-fullname">
                  Full name <span aria-hidden="true">*</span>
                </label>
                <div class="authmodal__control">
                  <input
                    class="authmodal__input"
                    id="auth-fullname"
                    name="fullName"
                    type="text"
                    placeholder="Sarah Parker"
                    required
                  />
                </div>
              </div>

              <div class="authmodal__field">
                <label class="authmodal__label" for="auth-email">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <div class="authmodal__control">
                  <input
                    class="authmodal__input"
                    id="auth-email"
                    name="email"
                    type="email"
                    placeholder="sarah@example.com"
                    required
                  />
                </div>
              </div>

              <div class="authmodal__field">
                <label class="authmodal__label" for="auth-password">
                  Password <span aria-hidden="true">*</span>
                </label>
                <div class="authmodal__control authmodal__control--password">
                  <input
                    class="authmodal__input"
                    id="auth-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    class="authmodal__toggle"
                    type="button"
                    data-action="toggle-password"
                    aria-label="Show password"
                  >
                    Show
                  </button>
                </div>
              </div>

              <div class="authmodal__actions">
                <button
                  class="authmodal__btn authmodal__btn--primary"
                  type="submit"
                  data-action="submit-auth"
                >
                  Create account
                </button>
              </div>
            </form>

            <div class="authmodal__footer">
              <p class="authmodal__footerText">
                Already have an account?
                <button
                  class="authmodal__linkBtn"
                  type="button"
                  data-action="switch-auth-login"
                >
                  Log in
                </button>
              </p>
              <p class="authmodal__footerText authmodal__footerText--secondary">
                <button
                  class="authmodal__linkBtn authmodal__linkBtn--ghost"
                  type="button"
                  data-action="reset-password"
                >
                  Forgot password? Reset it
                </button>
              </p>
            </div>
          </div>
        </section>

        <section
          class="bookmarkconfirm bookmarkconfirm--archive"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="bookmarkconfirm__backdrop"
            type="button"
            data-action="close-archive-confirm"
            aria-label="Close archive confirmation dialog"
          ></button>

          <div
            class="bookmarkconfirm__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="archive-confirm-title"
            aria-describedby="archive-confirm-description"
          >
            <button
              class="bookmarkconfirm__closeBtn"
              type="button"
              data-action="close-archive-confirm"
              aria-label="Close dialog"
            >
              ${d.modalClose}
            </button>

            <h2 class="bookmarkconfirm__title" id="archive-confirm-title">
              Archive bookmark
            </h2>
            <p class="bookmarkconfirm__description" id="archive-confirm-description">
              Are you sure you want to archive this bookmark?
            </p>

            <div class="bookmarkconfirm__actions">
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--ghost"
                type="button"
                data-action="cancel-archive-confirm"
              >
                Cancel
              </button>
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--primary"
                type="button"
                data-action="archive-bookmark"
              >
                Archive
              </button>
            </div>
          </div>
        </section>

        <section
          class="bookmarkconfirm bookmarkconfirm--unarchive"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="bookmarkconfirm__backdrop"
            type="button"
            data-action="close-unarchive-confirm"
            aria-label="Close unarchive confirmation dialog"
          ></button>

          <div
            class="bookmarkconfirm__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="unarchive-confirm-title"
            aria-describedby="unarchive-confirm-description"
          >
            <button
              class="bookmarkconfirm__closeBtn"
              type="button"
              data-action="close-unarchive-confirm"
              aria-label="Close dialog"
            >
              ${d.modalClose}
            </button>

            <h2 class="bookmarkconfirm__title" id="unarchive-confirm-title">
              Unarchive bookmark
            </h2>
            <p class="bookmarkconfirm__description" id="unarchive-confirm-description">
              Move this bookmark back to your active list?
            </p>

            <div class="bookmarkconfirm__actions">
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--ghost"
                type="button"
                data-action="cancel-unarchive-confirm"
              >
                Cancel
              </button>
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--primary"
                type="button"
                data-action="unarchive-bookmark"
              >
                Unarchive
              </button>
            </div>
          </div>
        </section>

        <section
          class="bookmarkconfirm bookmarkconfirm--delete"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="bookmarkconfirm__backdrop"
            type="button"
            data-action="close-delete-confirm"
            aria-label="Close delete confirmation dialog"
          ></button>

          <div
            class="bookmarkconfirm__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-confirm-title"
            aria-describedby="delete-confirm-description"
          >
            <button
              class="bookmarkconfirm__closeBtn"
              type="button"
              data-action="close-delete-confirm"
              aria-label="Close dialog"
            >
              ${d.modalClose}
            </button>

            <h2 class="bookmarkconfirm__title" id="delete-confirm-title">
              Delete bookmark
            </h2>
            <p class="bookmarkconfirm__description" id="delete-confirm-description">
              Are you sure you want to delete this bookmark?
            </p>

            <div class="bookmarkconfirm__actions">
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--ghost"
                type="button"
                data-action="cancel-delete-confirm"
              >
                Cancel
              </button>
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--danger"
                type="button"
                data-action="delete-bookmark"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </section>
    `}function l(e,t){const r=document.querySelector(e);r&&(r.setAttribute("data-state",t?"open":"closed"),r.setAttribute("aria-hidden",String(!t)),document.querySelector(".cards__container"),t?r.removeAttribute("inert"):r.setAttribute("inert",""))}function O(){const e=i.theme==="light"?"is-active":"",t=i.theme==="dark"?"is-active":"",r=i.theme==="light",o=i.theme==="dark";return`
 <header class="header" id="header">
          <div class="header__container">
            <div class="header__btn">
              <button
                class="header__menuBtn"
                type="button"
                data-action="toggle-sidebar"
                aria-expanded="false"
                aria-controls="sidebar-panel"
              >
                ${d.menu}
              </button>
            </div>
            <form class="header__form" role="search" aria-label="Search bookmarks">
              ${d.search}
              <input
                type="text"
                required
                id="header__input"
                class="header__input"
                name="query"
                placeholder="Search by title..."
                aria-label="Search bookmarks"
              />
            </form>
          </div>

          <div class="header__btnGroup">
            <button class="header__addBtn text-3" type="button" data-action="addbookmark">
              ${d.add}
              <span class="header__addBookmark-text">Add Bookmark</span>
            </button>

            <div class="accountmenu" data-state="closed">
              <button
                class="header__userNameBtn accountmenu__trigger"
                type="button"
                data-action="toggle-accountmenu"
                aria-expanded="false"
                aria-controls="accountmenu-panel"
              >
                <img src="${m("assets/images/image-avatar.webp")}" alt="Emily Carter profile" />
              </button>

              <div
                class="accountmenu__panel"
                id="accountmenu-panel"
                aria-label="Account menu"
              >
                <div class="accountmenu__profile">
                  <div class="accountmenu__avatar">
                    <img src="${m("assets/images/image-avatar.webp")}" alt="" />
                  </div>

                  <div class="accountmenu__profileText">
                    <p class="accountmenu__name text-4">Emily Carter</p>
                    <p class="accountmenu__email text-4">emily101@email.com</p>
                  </div>
                </div>

                <div class="accountmenu__section">
                  <div class="accountmenu__row">
                    <div class="accountmenu__rowLabel">
                      ${d.palette}
                      <span class="text-4">Theme</span>
                    </div>

                    <div class="accountmenu__themeToggle" role="group" aria-label="Theme">
                      <button
                        class="accountmenu__themeBtn ${e}"
                        type="button"
                        data-action="set-theme-light"
                        aria-pressed="${r}"
                      >
                        ${d.sun}
                      </button>

                      <button
                        class="accountmenu__themeBtn ${t}"
                        type="button"
                        data-action="set-theme-dark"
                        aria-pressed="${o}"
                      >
                        ${d.moon}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="accountmenu__section">
                  <button class="accountmenu__menuBtn" type="button" data-action="logout">
                    <span class="accountmenu__rowLabel">
                      ${d.logout}
                      <span class="text-4">Logout</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
    `}function w(){const e=document.getElementById("app"),t=`

${C()}
  <main>${O()}
  ${$()}
  ${Z()}
  </main>
  `;e.innerHTML=t}function f(){const e=i.theme,t=document.documentElement;e==="light"?t.setAttribute("data-theme","light"):t.setAttribute("data-theme","dark"),P(e)}function P(e){const t=document.querySelector('[data-action="set-theme-light"]'),r=document.querySelector('[data-action="set-theme-dark"]');if(!t||!r)return;const o=e==="light";t.classList.toggle("is-active",o),t.setAttribute("aria-pressed",String(o)),r.classList.toggle("is-active",!o),r.setAttribute("aria-pressed",String(!o))}function U(){const e=document.querySelector(".accountmenu__panel"),t=document.querySelector("[data-action='toggle-accountmenu']");e&&(t.classList.toggle("active"),e.classList.toggle("open"))}function h(e){i.isMobileSidebarOpen=e;const t=document.querySelector(".sidebar");t?(t.classList.toggle("open",e),t.setAttribute("aria-hidden",String(!e))):w();const r=document.querySelector('[data-action="toggle-sidebar"]');r&&r.setAttribute("aria-expanded",String(e))}function R(){document.addEventListener("click",e=>{const t=e.target.closest("[data-action]")?.dataset.action,r=e.target.closest("[data-action]");if(G(e),!!t){if(t==="toggle-sidebar"&&h(!0),t==="close-sidebar"&&h(!1),t==="toggle-accountmenu"&&U(),t==="set-theme-light"&&(i.theme="light",f()),t==="set-theme-dark"&&(i.theme="dark",f()),t==="addbookmark"&&l(".addbookmark",!0),t==="close-addbookmark"&&(l(".addbookmark",!1),b()),t==="cancel-addbookmark"&&(l(".addbookmark",!1),b()),t==="sort"&&F(),t==="toggle-cardmenu"&&r.closest(".cardmenu").querySelector(".cardmenu__panel").classList.toggle("open"),t==="set-sort"){document.querySelectorAll("[data-action='set-sort']").forEach(s=>{s.classList.remove("is-active")}),r.classList.add("is-active");const a=r.dataset.sortValue;i.selectedSort=a;const n=document.querySelector(".cards__container");n.innerHTML=v()}if(t==="save-addbookmark"&&(l(".addbookmark",!1),g()),t==="filter-tag"){const o=r.dataset.tag;i.selectedTags.includes(o)?i.selectedTags=i.selectedTags.filter(a=>a!==o):i.selectedTags.push(o),u()}if(t==="visit-bookmark"){const o=r.closest("[data-bookmark-id]").dataset.bookmarkId,a=i.bookmarks.find(s=>s.id===o);a.visitCount++,a.lastVisited=Date.now();const n=a.url;window.open(n,"_blank"),u()}if(t==="copy-bookmark-url"){const o=r.closest("[data-bookmark-id]").dataset.bookmarkId,a=i.bookmarks.find(s=>s.id===o);if(!a)return;const n=a.url;navigator.clipboard.writeText(n).then(()=>{r.querySelector("span").textContent="Copied",setTimeout(()=>{r.querySelector("span").textContent="Copy URL"},2e3)})}if(t==="toggle-pin-bookmark"){const o=r.closest("[data-bookmark-id]").dataset.bookmarkId,a=i.bookmarks.find(n=>n.id===o);a.pinned=!a.pinned,u()}if(t==="edit-bookmark"){const o=r.closest("[data-bookmark-id]").dataset.bookmarkId,a=i.bookmarks.find(p=>p.id===o);l(".addbookmark",!0);const n=document.querySelector(".addbookmark__input"),s=document.querySelector(".addbookmark__textarea"),c=document.getElementById("addbookmark-url-input"),y=document.getElementById("addbookmark-tags-input");n.value=a.title,s.value=a.description,c.value=a.url,y.value=a.tags,i.editingBookmarkId=o,document.querySelectorAll(".addbookmark__field").forEach(p=>p.classList.remove("error"))}if(t==="open-archive-confirm"){const o=r.closest("[data-bookmark-id]").dataset.bookmarkId;i.archivingBookmarkId=o,l(".bookmarkconfirm--archive",!0)}if(t==="close-archive-confirm"&&l(".bookmarkconfirm--archive",!1),t==="cancel-archive-confirm"&&l(".bookmarkconfirm--archive",!1),t==="archive-bookmark"){const o=i.bookmarks.find(a=>a.id===i.archivingBookmarkId);o.isArchived=!0,l(".bookmarkconfirm--archive",!1),u(),i.archivingBookmarkId=null}if(t==="navigate-home"&&(i.activeView="main",h(!1),u()),t==="navigate-archived"&&(i.activeView="archive",h(!1),u()),t==="close-delete-confirm"&&l(".bookmarkconfirm--delete",!1),t==="cancel-delete-confirm"&&l(".bookmarkconfirm--delete",!1),t==="delete-modal-open"){l(".bookmarkconfirm--delete",!0);const o=r.closest("[data-bookmark-id]").dataset.bookmarkId;i.deletingBookmarkId=o}if(t==="delete-bookmark"){const o=i.deletingBookmarkId;I(o),l(".bookmarkconfirm--delete",!1)}if(t==="open-unarchive-confirm"){l(".bookmarkconfirm--unarchive",!0);const o=r.closest("[data-bookmark-id]").dataset.bookmarkId;i.unarchivingBookmarkId=o}if(t==="unarchive-bookmark"){const o=i.unarchivingBookmarkId,a=i.bookmarks.find(n=>n.id===o);a.isArchived=!1,u(),l(".bookmarkconfirm--unarchive",!1)}t==="cancel-unarchive-confirm"&&l(".bookmarkconfirm--unarchive",!1),t==="close-unarchive-confirm"&&l(".bookmarkconfirm--unarchive",!1)}}),document.addEventListener("submit",e=>{const t=e.target;t instanceof HTMLFormElement&&(t.matches(".addbookmark__form")&&(e.preventDefault(),g()),t.matches(".authmodal__form")&&e.preventDefault())}),document.addEventListener("input",e=>{i.searchQuery=document.getElementById("header__input").value,u()})}function F(){document.querySelector(".sortmenu__panel").classList.toggle("open")}const N=[{container:".accountmenu",panel:".accountmenu__panel"},{container:".sortmenu",panel:".sortmenu__panel"},{container:".cardmenu",panel:".cardmenu__panel"},{container:".sidebar",panel:".sidebar"}];function G(e){N.forEach(({container:t,panel:r})=>{const o=document.querySelector(r);o&&!e.target.closest(t)&&o.classList.contains("open")&&o.classList.remove("open")})}async function Q(){await H(),w(),R()}Q();
//# sourceMappingURL=index-C7LZU8tC.js.map
