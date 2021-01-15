import React from "react";
import { Navbar } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
// Adding some comments to see if my git commits get pushed

export default function Navigation() {
  return (
    <Navbar className={styles.navBar} sticky="top" expand="sm" >
      <Navbar.Brand href="/home">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.4146 5.71754C18.3036 5.60448 18.1559 5.54138 18.0022 5.54138C17.8486 5.54138 17.7009 5.60448 17.5898 5.71754L3.8608 19.679C3.80249 19.7384 3.75611 19.8097 3.72444 19.8887C3.69278 19.9677 3.67651 20.0527 3.6766 20.1386L3.67436 33.2419C3.67436 33.9157 3.92578 34.5618 4.37331 35.0382C4.82084 35.5146 5.42782 35.7823 6.06073 35.7823H13.2273C13.5437 35.7823 13.8472 35.6484 14.071 35.4102C14.2947 35.172 14.4205 34.849 14.4205 34.5121V23.7157C14.4205 23.5473 14.4833 23.3858 14.5952 23.2667C14.7071 23.1476 14.8588 23.0807 15.017 23.0807H20.983C21.1412 23.0807 21.2929 23.1476 21.4048 23.2667C21.5167 23.3858 21.5796 23.5473 21.5796 23.7157V34.5121C21.5796 34.849 21.7053 35.172 21.929 35.4102C22.1528 35.6484 22.4563 35.7823 22.7727 35.7823H29.9363C30.5692 35.7823 31.1762 35.5146 31.6237 35.0382C32.0712 34.5618 32.3227 33.9157 32.3227 33.2419V20.1386C32.3228 20.0527 32.3065 19.9677 32.2748 19.8887C32.2432 19.8097 32.1968 19.7384 32.1385 19.679L18.4146 5.71754Z"
            fill="white"
          />
          <path
            d="M35.5182 17.0593L29.94 11.3785V2.7581C29.94 2.42123 29.8143 2.09816 29.5906 1.85996C29.3668 1.62176 29.0633 1.48794 28.7468 1.48794H25.1673C24.8508 1.48794 24.5474 1.62176 24.3236 1.85996C24.0998 2.09816 23.9741 2.42123 23.9741 2.7581V5.29842L19.6548 0.902073C19.2506 0.467043 18.6495 0.217773 18 0.217773C17.3527 0.217773 16.7531 0.467043 16.3489 0.902867L0.487079 17.0577C0.0232291 17.534 -0.0349385 18.3176 0.38715 18.8336C0.493142 18.9638 0.622923 19.0698 0.768594 19.1449C0.914265 19.2201 1.07278 19.2629 1.23449 19.2708C1.3962 19.2786 1.55772 19.2514 1.70923 19.1907C1.86073 19.13 1.99905 19.0371 2.11577 18.9177L17.5898 3.17725C17.7009 3.06419 17.8486 3.00109 18.0022 3.00109C18.1559 3.00109 18.3036 3.06419 18.4146 3.17725L33.8902 18.9177C34.1182 19.1504 34.4235 19.2775 34.7393 19.2709C35.0551 19.2644 35.3555 19.1248 35.5748 18.8828C36.0327 18.3779 35.9947 17.5444 35.5182 17.0593Z"
            fill="white"
          />
        </svg>
      </Navbar.Brand>
      <Navbar.Brand href="/expenses">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4931 35.125V32.2797C6.83524 31.9219 0.967882 28.7234 0.9375 23.875H9.6875C9.9026 25.9328 12.5872 27.5039 16.4931 27.7812V20.125L13.2398 19.5781C5.82656 18.4703 1.8599 15.7195 1.8599 11.6031C1.8599 6.75078 7.26667 3.56875 16.4931 3.09375V0.125H20.3819V3.09375C29.787 3.58594 34.8438 6.82344 34.9653 11.375H26.2153C26.1229 9.49531 24.2915 7.98516 20.3819 7.78125V14.9688L24.1274 15.5375C32.0012 16.6453 35.9375 19.2656 35.9375 23.5625C35.9375 28.5891 30.6219 31.8344 20.3819 32.2594V35.125H16.4931ZM16.4931 14.5V7.78125C13.1401 7.9 10.7484 9.22422 10.7484 11.1039C10.7484 12.8461 12.7403 13.9852 16.4931 14.5ZM20.3819 20.5938V27.7812C25.0182 27.6609 27.2337 26.3031 27.2337 24.2055C27.2337 22.2852 25.0182 20.9922 20.3819 20.5938Z"
            fill="white"
          />
        </svg>
      </Navbar.Brand>
      <Navbar.Brand href="/charts">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.10129 35.8977H2.38578C1.84563 35.8977 1.3276 35.7092 0.945656 35.3735C0.563712 35.0379 0.349138 34.5826 0.349138 34.1079V23.3693C0.349138 22.8946 0.563712 22.4394 0.945656 22.1038C1.3276 21.7681 1.84563 21.5795 2.38578 21.5795H5.10129C5.64144 21.5795 6.15947 21.7681 6.54141 22.1038C6.92336 22.4394 7.13793 22.8946 7.13793 23.3693V34.1079C7.13793 34.5826 6.92336 35.0379 6.54141 35.3735C6.15947 35.7092 5.64144 35.8977 5.10129 35.8977ZM24.1099 35.8977H21.3944C20.8542 35.8977 20.3362 35.7092 19.9543 35.3735C19.5723 35.0379 19.3578 34.5826 19.3578 34.1079V16.2102C19.3578 15.7355 19.5723 15.2803 19.9543 14.9447C20.3362 14.609 20.8542 14.4204 21.3944 14.4204H24.1099C24.6501 14.4204 25.1681 14.609 25.55 14.9447C25.932 15.2803 26.1466 15.7355 26.1466 16.2102V34.1079C26.1466 34.5826 25.932 35.0379 25.55 35.3735C25.1681 35.7092 24.6501 35.8977 24.1099 35.8977ZM33.6142 35.8977H30.8987C30.3586 35.8977 29.8405 35.7092 29.4586 35.3735C29.0766 35.0379 28.8621 34.5826 28.8621 34.1079V7.85795C28.8621 7.38327 29.0766 6.92803 29.4586 6.59239C29.8405 6.25674 30.3586 6.06817 30.8987 6.06817H33.6142C34.1544 6.06817 34.6724 6.25674 35.0543 6.59239C35.4363 6.92803 35.6509 7.38327 35.6509 7.85795V34.1079C35.6509 34.5826 35.4363 35.0379 35.0543 35.3735C34.6724 35.7092 34.1544 35.8977 33.6142 35.8977ZM14.6056 35.8977H11.8901C11.3499 35.8977 10.8319 35.7092 10.45 35.3735C10.068 35.0379 9.85345 34.5826 9.85345 34.1079V1.89204C9.85345 1.41736 10.068 0.962124 10.45 0.626477C10.8319 0.290829 11.3499 0.102264 11.8901 0.102264H14.6056C15.1458 0.102264 15.6638 0.290829 16.0457 0.626477C16.4277 0.962124 16.6422 1.41736 16.6422 1.89204V34.1079C16.6422 34.5826 16.4277 35.0379 16.0457 35.3735C15.6638 35.7092 15.1458 35.8977 14.6056 35.8977Z"
            fill="white"
          />
        </svg>
      </Navbar.Brand>
      <Navbar.Brand href="/settings">
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 21.5795C20.1045 21.5795 21.8105 19.9769 21.8105 18C21.8105 16.0231 20.1045 14.4204 18 14.4204C15.8955 14.4204 14.1895 16.0231 14.1895 18C14.1895 19.9769 15.8955 21.5795 18 21.5795Z"
            fill="white"
          />
          <path
            d="M35.0194 21.2813L34.9821 21.2529L32.4767 19.4072C32.318 19.2893 32.1914 19.1377 32.1072 18.9649C32.023 18.7921 31.9837 18.603 31.9924 18.4132V17.5511C31.9845 17.3624 32.0243 17.1747 32.1086 17.0033C32.1929 16.8319 32.3193 16.6818 32.4775 16.5652L34.9821 14.7188L35.0194 14.6904C35.4056 14.3881 35.6649 13.9667 35.7507 13.5013C35.8365 13.036 35.7433 12.5571 35.4877 12.1504L32.0972 6.63943C32.0933 6.63423 32.0899 6.62874 32.0869 6.62302C31.83 6.22194 31.4317 5.91804 30.9611 5.7641C30.4905 5.61017 29.9774 5.61591 29.5108 5.78034L29.4831 5.79003L26.5379 6.90342C26.352 6.97403 26.1509 7.00212 25.9512 6.9854C25.7515 6.96867 25.5588 6.9076 25.3892 6.80722C25.1288 6.6531 24.8642 6.50743 24.5953 6.37022C24.421 6.28142 24.2713 6.15538 24.1584 6.00227C24.0455 5.84916 23.9724 5.67326 23.9452 5.48875L23.5014 2.53637L23.4919 2.48268C23.3953 2.02539 23.134 1.61328 22.7521 1.3156C22.3701 1.01791 21.8908 0.852806 21.3945 0.848022H14.6055C14.1022 0.849535 13.6157 1.01784 13.2316 1.32328C12.8475 1.62873 12.5904 2.05172 12.5058 2.51773L12.4986 2.55949L12.0564 5.51784C12.0293 5.70181 11.9568 5.8773 11.8448 6.03033C11.7328 6.18336 11.5842 6.3097 11.411 6.3993C11.1414 6.53573 10.8766 6.68048 10.6172 6.83332C10.4478 6.93309 10.2557 6.99369 10.0566 7.01016C9.85742 7.02662 9.65697 6.99848 9.47166 6.92803L6.5241 5.80942L6.49631 5.79898C6.0291 5.63437 5.51524 5.62885 5.04414 5.78336C4.57304 5.93787 4.1745 6.24264 3.91788 6.64465L3.90756 6.66106L0.512262 12.1758C0.256348 12.5829 0.162944 13.0623 0.248752 13.5282C0.33456 13.9941 0.593985 14.4161 0.980634 14.7188L1.01795 14.7471L3.52334 16.5928C3.682 16.7107 3.80862 16.8623 3.8928 17.0351C3.97698 17.2079 4.01632 17.397 4.00759 17.5869V18.4489C4.01554 18.6376 3.97572 18.8253 3.89139 18.9967C3.80707 19.1681 3.68066 19.3183 3.52254 19.4348L1.01795 21.2813L0.980634 21.3096C0.594367 21.6119 0.335154 22.0334 0.249346 22.4987C0.163538 22.964 0.256732 23.4429 0.512262 23.8496L3.9028 29.3606C3.9067 29.3658 3.91015 29.3713 3.91312 29.377C4.17003 29.7781 4.56836 30.082 5.03894 30.2359C5.50951 30.3899 6.02262 30.3841 6.48917 30.2197L6.51695 30.21L9.45975 29.0966C9.64564 29.026 9.84673 28.9979 10.0465 29.0146C10.2462 29.0314 10.4388 29.0924 10.6085 29.1928C10.8688 29.3474 11.1335 29.4931 11.4023 29.6298C11.5766 29.7186 11.7263 29.8446 11.8392 29.9978C11.9521 30.1509 12.0252 30.3268 12.0525 30.5113L12.4939 33.4636L12.5034 33.5173C12.6002 33.9754 12.8621 34.3881 13.245 34.6858C13.6279 34.9836 14.1084 35.1482 14.6055 35.152H21.3945C21.8978 35.1505 22.3843 34.9822 22.7684 34.6767C23.1525 34.3713 23.4096 33.9483 23.4942 33.4823L23.5014 33.4405L23.9436 30.4822C23.9711 30.2979 24.0442 30.1221 24.1569 29.9691C24.2697 29.816 24.419 29.6899 24.5929 29.6007C24.8644 29.4635 25.1296 29.3181 25.3868 29.1667C25.5561 29.0669 25.7483 29.0063 25.9474 28.9899C26.1466 28.9734 26.347 29.0015 26.5323 29.072L29.4799 30.1869L29.5077 30.1973C29.9748 30.3622 30.4888 30.3679 30.96 30.2134C31.4312 30.0588 31.8297 29.7539 32.0861 29.3516C32.0892 29.346 32.0927 29.3405 32.0964 29.3352L35.4869 23.825C35.7433 23.4179 35.8371 22.9384 35.7514 22.4723C35.6657 22.0062 35.4062 21.584 35.0194 21.2813ZM24.3437 18.2804C24.2859 19.4352 23.8721 20.5494 23.1527 21.4875C22.4333 22.4255 21.4393 23.147 20.2915 23.5641C19.1437 23.9813 17.8917 24.0762 16.6875 23.8373C15.4834 23.5984 14.3791 23.036 13.5089 22.2185C12.6387 21.4009 12.0401 20.3635 11.786 19.2323C11.5318 18.1011 11.633 16.9249 12.0772 15.8467C12.5214 14.7686 13.2896 13.8349 14.2882 13.1592C15.2869 12.4835 16.473 12.095 17.7023 12.0408C18.5849 12.0043 19.4659 12.1407 20.2893 12.4414C21.1127 12.7421 21.8605 13.2004 22.4851 13.7872C23.1098 14.3741 23.5976 15.0766 23.9176 15.8502C24.2375 16.6237 24.3826 17.4513 24.3437 18.2804Z"
            fill="white"
          />
        </svg>
      </Navbar.Brand>
    </Navbar>
  );
}