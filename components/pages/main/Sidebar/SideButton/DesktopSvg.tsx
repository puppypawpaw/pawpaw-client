function Feed({ color }: { color: string }) {
  return (
    <div className="cursor-pointer">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.9345 11.3499L15.1845 3.09431C15.1803 3.09058 15.1762 3.08656 15.1725 3.08228C14.8503 2.7893 14.4305 2.62695 13.9951 2.62695C13.5596 2.62695 13.1398 2.7893 12.8177 3.08228L12.8056 3.09431L4.06547 11.3499C3.88719 11.5139 3.74487 11.713 3.64754 11.9348C3.5502 12.1566 3.49996 12.3962 3.5 12.6384V22.7501C3.5 23.2142 3.68437 23.6593 4.01256 23.9875C4.34075 24.3157 4.78587 24.5001 5.25 24.5001H10.5C10.9641 24.5001 11.4092 24.3157 11.7374 23.9875C12.0656 23.6593 12.25 23.2142 12.25 22.7501V17.5001H15.75V22.7501C15.75 23.2142 15.9344 23.6593 16.2626 23.9875C16.5908 24.3157 17.0359 24.5001 17.5 24.5001H22.75C23.2141 24.5001 23.6592 24.3157 23.9874 23.9875C24.3156 23.6593 24.5 23.2142 24.5 22.7501V12.6384C24.5 12.3962 24.4498 12.1566 24.3525 11.9348C24.2551 11.713 24.1128 11.5139 23.9345 11.3499ZM22.75 22.7501H17.5V17.5001C17.5 17.036 17.3156 16.5908 16.9874 16.2627C16.6592 15.9345 16.2141 15.7501 15.75 15.7501H12.25C11.7859 15.7501 11.3408 15.9345 11.0126 16.2627C10.6844 16.5908 10.5 17.036 10.5 17.5001V22.7501H5.25V12.6384L5.26203 12.6274L14 4.37509L22.7391 12.6252L22.7511 12.6362L22.75 22.7501Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function Community({ color }: { color: string }) {
  return (
    <div className="cursor-pointer">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.3125 14.0002C15.3125 14.2598 15.2355 14.5136 15.0913 14.7294C14.9471 14.9452 14.7421 15.1135 14.5023 15.2128C14.2624 15.3121 13.9985 15.3381 13.7439 15.2875C13.4893 15.2369 13.2555 15.1119 13.0719 14.9283C12.8884 14.7447 12.7634 14.5109 12.7127 14.2563C12.6621 14.0017 12.6881 13.7378 12.7874 13.4979C12.8867 13.2581 13.055 13.0531 13.2708 12.9089C13.4867 12.7647 13.7404 12.6877 14 12.6877C14.3481 12.6877 14.6819 12.826 14.9281 13.0721C15.1742 13.3183 15.3125 13.6521 15.3125 14.0002ZM9.1875 12.6877C8.92791 12.6877 8.67415 12.7647 8.45831 12.9089C8.24247 13.0531 8.07425 13.2581 7.97491 13.4979C7.87557 13.7378 7.84958 14.0017 7.90022 14.2563C7.95086 14.5109 8.07587 14.7447 8.25942 14.9283C8.44298 15.1119 8.67684 15.2369 8.93144 15.2875C9.18604 15.3381 9.44994 15.3121 9.68977 15.2128C9.9296 15.1135 10.1346 14.9452 10.2788 14.7294C10.423 14.5136 10.5 14.2598 10.5 14.0002C10.5 13.6521 10.3617 13.3183 10.1156 13.0721C9.86944 12.826 9.5356 12.6877 9.1875 12.6877ZM18.8125 12.6877C18.5529 12.6877 18.2992 12.7647 18.0833 12.9089C17.8675 13.0531 17.6992 13.2581 17.5999 13.4979C17.5006 13.7378 17.4746 14.0017 17.5252 14.2563C17.5759 14.5109 17.7009 14.7447 17.8844 14.9283C18.068 15.1119 18.3018 15.2369 18.5564 15.2875C18.811 15.3381 19.0749 15.3121 19.3148 15.2128C19.5546 15.1135 19.7596 14.9452 19.9038 14.7294C20.048 14.5136 20.125 14.2598 20.125 14.0002C20.125 13.6521 19.9867 13.3183 19.7406 13.0721C19.4944 12.826 19.1606 12.6877 18.8125 12.6877ZM25.375 14.0002C25.3754 15.9641 24.8674 17.8946 23.9004 19.6039C22.9333 21.3132 21.5403 22.7429 19.8567 23.7541C18.1732 24.7652 16.2565 25.3233 14.2933 25.3739C12.3301 25.4246 10.3872 24.966 8.65375 24.043L4.92953 25.2844C4.62119 25.3873 4.2903 25.4022 3.97395 25.3275C3.6576 25.2529 3.3683 25.0916 3.13846 24.8618C2.90863 24.6319 2.74734 24.3426 2.67268 24.0263C2.59803 23.7099 2.61295 23.379 2.71578 23.0707L3.95719 19.3465C3.14579 17.8209 2.69259 16.1306 2.632 14.4038C2.5714 12.677 2.90501 10.959 3.60748 9.38036C4.30996 7.80171 5.36284 6.40385 6.68622 5.29286C8.0096 4.18188 9.56869 3.38699 11.2451 2.96852C12.9216 2.55005 14.6713 2.519 16.3616 2.87773C18.0518 3.23646 19.6381 3.97554 21.0001 5.03887C22.3621 6.1022 23.4639 7.46184 24.2219 9.01457C24.9799 10.5673 25.3743 12.2723 25.375 14.0002ZM23.625 14.0002C23.6246 12.5238 23.2845 11.0672 22.6311 9.74328C21.9777 8.41931 21.0285 7.26341 19.8568 6.365C18.6852 5.46659 17.3226 4.84976 15.8744 4.56223C14.4263 4.2747 12.9314 4.32418 11.5054 4.70684C10.0794 5.0895 8.7606 5.79508 7.65095 6.76899C6.54129 7.7429 5.67057 8.95904 5.10613 10.3233C4.54169 11.6876 4.29868 13.1634 4.39588 14.6367C4.49309 16.1099 4.92792 17.541 5.66672 18.8193C5.72873 18.9266 5.76723 19.0459 5.77967 19.1692C5.79212 19.2925 5.77822 19.4171 5.73891 19.5346L4.375 23.6252L8.46562 22.2613C8.55472 22.2309 8.64821 22.2154 8.74234 22.2154C8.89602 22.2156 9.04691 22.2564 9.17984 22.3335C10.6431 23.1801 12.3034 23.6264 13.9939 23.6274C15.6844 23.6285 17.3453 23.1843 18.8096 22.3396C20.2739 21.4948 21.4899 20.2794 22.3352 18.8154C23.1805 17.3515 23.6254 15.6907 23.625 14.0002Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function Pawzone({ color }: { color: string }) {
  return (
    <div className="cursor-pointer">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 7C13.1347 7 12.2888 7.25659 11.5694 7.73732C10.8499 8.21805 10.2892 8.90133 9.95803 9.70076C9.62689 10.5002 9.54025 11.3799 9.70906 12.2285C9.87787 13.0772 10.2946 13.8567 10.9064 14.4686C11.5183 15.0804 12.2978 15.4971 13.1465 15.6659C13.9951 15.8347 14.8748 15.7481 15.6742 15.417C16.4737 15.0858 17.1569 14.5251 17.6377 13.8056C18.1184 13.0862 18.375 12.2403 18.375 11.375C18.375 10.2147 17.9141 9.10188 17.0936 8.28141C16.2731 7.46094 15.1603 7 14 7ZM14 14C13.4808 14 12.9733 13.846 12.5416 13.5576C12.1099 13.2692 11.7735 12.8592 11.5748 12.3795C11.3761 11.8999 11.3242 11.3721 11.4254 10.8629C11.5267 10.3537 11.7767 9.88596 12.1438 9.51884C12.511 9.15173 12.9787 8.90172 13.4879 8.80044C13.9971 8.69915 14.5249 8.75114 15.0045 8.94982C15.4842 9.1485 15.8942 9.48495 16.1826 9.91663C16.471 10.3483 16.625 10.8558 16.625 11.375C16.625 12.0712 16.3484 12.7389 15.8562 13.2312C15.3639 13.7234 14.6962 14 14 14ZM14 1.75C11.4482 1.75289 9.0017 2.76788 7.19729 4.57229C5.39288 6.37671 4.37789 8.82318 4.375 11.375C4.375 14.8094 5.96203 18.4494 8.96875 21.9023C10.3198 23.4626 11.8403 24.8677 13.5023 26.0914C13.6495 26.1945 13.8247 26.2498 14.0044 26.2498C14.184 26.2498 14.3593 26.1945 14.5064 26.0914C16.1654 24.8672 17.683 23.4622 19.0312 21.9023C22.0336 18.4494 23.625 14.8094 23.625 11.375C23.6221 8.82318 22.6071 6.37671 20.8027 4.57229C18.9983 2.76788 16.5518 1.75289 14 1.75ZM14 24.2812C12.192 22.8594 6.125 17.6367 6.125 11.375C6.125 9.28642 6.95468 7.28338 8.43153 5.80653C9.90838 4.32968 11.9114 3.5 14 3.5C16.0886 3.5 18.0916 4.32968 19.5685 5.80653C21.0453 7.28338 21.875 9.28642 21.875 11.375C21.875 17.6345 15.808 22.8594 14 24.2812Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function Mypage({ color }: { color: string }) {
  return (
    <div className="cursor-pointer">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 2.625C11.7502 2.625 9.551 3.29213 7.68039 4.54203C5.80978 5.79193 4.35182 7.56847 3.49088 9.64698C2.62993 11.7255 2.40467 14.0126 2.84357 16.2192C3.28248 18.4257 4.36584 20.4525 5.95667 22.0433C7.54749 23.6342 9.57432 24.7175 11.7809 25.1564C13.9874 25.5953 16.2745 25.3701 18.353 24.5091C20.4315 23.6482 22.2081 22.1902 23.458 20.3196C24.7079 18.449 25.375 16.2498 25.375 14C25.3718 10.9841 24.1724 8.09271 22.0398 5.96018C19.9073 3.82764 17.0159 2.62818 14 2.625ZM8.10251 21.6016C8.7355 20.6116 9.60751 19.7969 10.6382 19.2326C11.6688 18.6682 12.825 18.3724 14 18.3724C15.175 18.3724 16.3312 18.6682 17.3618 19.2326C18.3925 19.7969 19.2645 20.6116 19.8975 21.6016C18.2113 22.913 16.1361 23.6249 14 23.6249C11.8639 23.6249 9.7887 22.913 8.10251 21.6016ZM10.5 13.125C10.5 12.4328 10.7053 11.7561 11.0899 11.1805C11.4744 10.6049 12.0211 10.1563 12.6606 9.89142C13.3002 9.62651 14.0039 9.5572 14.6828 9.69225C15.3618 9.8273 15.9854 10.1606 16.4749 10.6501C16.9644 11.1396 17.2977 11.7633 17.4328 12.4422C17.5678 13.1211 17.4985 13.8249 17.2336 14.4644C16.9687 15.1039 16.5201 15.6506 15.9445 16.0351C15.3689 16.4197 14.6922 16.625 14 16.625C13.0717 16.625 12.1815 16.2563 11.5251 15.5999C10.8688 14.9435 10.5 14.0533 10.5 13.125ZM21.1925 20.3886C20.2166 18.9745 18.8444 17.8804 17.2484 17.2441C18.1057 16.5688 18.7313 15.6432 19.0382 14.596C19.345 13.5487 19.3179 12.4319 18.9606 11.4008C18.6033 10.3696 17.9336 9.47547 17.0445 8.84263C16.1554 8.20979 15.0913 7.86973 14 7.86973C12.9087 7.86973 11.8446 8.20979 10.9555 8.84263C10.0665 9.47547 9.39671 10.3696 9.0394 11.4008C8.68209 12.4319 8.65497 13.5487 8.96183 14.596C9.26869 15.6432 9.89427 16.5688 10.7516 17.2441C9.15559 17.8804 7.78338 18.9745 6.80751 20.3886C5.57438 19.0019 4.7684 17.2883 4.48662 15.4541C4.20484 13.62 4.45927 11.7435 5.21929 10.0506C5.9793 8.35768 7.21249 6.92057 8.77035 5.91231C10.3282 4.90404 12.1443 4.36761 14 4.36761C15.8557 4.36761 17.6718 4.90404 19.2297 5.91231C20.7875 6.92057 22.0207 8.35768 22.7807 10.0506C23.5407 11.7435 23.7952 13.62 23.5134 15.4541C23.2316 17.2883 22.4256 19.0019 21.1925 20.3886Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
function Search({ color }: { color: string }) {
  return (
    <div className="cursor-pointer">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.1188 23.8807L19.6424 18.4054C21.2297 16.4998 22.0212 14.0555 21.8523 11.5812C21.6833 9.10685 20.567 6.79288 18.7354 5.12067C16.9039 3.44845 14.4981 2.54673 12.0187 2.60308C9.5392 2.65943 7.17691 3.66951 5.42321 5.42321C3.66951 7.17691 2.65943 9.5392 2.60308 12.0187C2.54673 14.4981 3.44845 16.9039 5.12067 18.7354C6.79288 20.567 9.10685 21.6833 11.5812 21.8523C14.0555 22.0212 16.4998 21.2297 18.4054 19.6424L23.8807 25.1188C23.962 25.2001 24.0585 25.2646 24.1647 25.3086C24.2709 25.3526 24.3848 25.3752 24.4998 25.3752C24.6147 25.3752 24.7286 25.3526 24.8348 25.3086C24.941 25.2646 25.0375 25.2001 25.1188 25.1188C25.2001 25.0375 25.2646 24.941 25.3086 24.8348C25.3526 24.7286 25.3752 24.6147 25.3752 24.4998C25.3752 24.3848 25.3526 24.2709 25.3086 24.1647C25.2646 24.0585 25.2001 23.962 25.1188 23.8807ZM4.37476 12.2498C4.37476 10.6922 4.83662 9.16968 5.70194 7.87465C6.56725 6.57961 7.79716 5.57025 9.23613 4.97421C10.6751 4.37817 12.2585 4.22222 13.7861 4.52608C15.3137 4.82994 16.7169 5.57996 17.8182 6.6813C18.9196 7.78263 19.6696 9.18582 19.9734 10.7134C20.2773 12.241 20.1214 13.8244 19.5253 15.2634C18.9293 16.7024 17.9199 17.9323 16.6249 18.7976C15.3298 19.6629 13.8073 20.1248 12.2498 20.1248C10.1619 20.1224 8.1602 19.292 6.68385 17.8157C5.20751 16.3393 4.37708 14.3376 4.37476 12.2498Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
function Alert({ color }: { color: string }) {
  return (
    <div className="cursor-pointer">
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24.2591 19.2434C23.6521 18.1978 22.7497 15.2392 22.7497 11.375C22.7497 9.05436 21.8278 6.82876 20.1869 5.18782C18.5459 3.54687 16.3204 2.625 13.9997 2.625C11.6791 2.625 9.45347 3.54687 7.81252 5.18782C6.17158 6.82876 5.24971 9.05436 5.24971 11.375C5.24971 15.2403 4.34627 18.1978 3.73924 19.2434C3.58422 19.5093 3.50204 19.8113 3.50099 20.119C3.49993 20.4267 3.58004 20.7293 3.73322 20.9962C3.88641 21.2631 4.10726 21.4848 4.37351 21.6391C4.63976 21.7934 4.94198 21.8748 5.24971 21.875H9.7133C9.91518 22.8628 10.452 23.7506 11.2331 24.3882C12.0142 25.0258 12.9915 25.374 13.9997 25.374C15.008 25.374 15.9853 25.0258 16.7663 24.3882C17.5474 23.7506 18.0842 22.8628 18.2861 21.875H22.7497C23.0573 21.8746 23.3594 21.7931 23.6255 21.6387C23.8916 21.4843 24.1123 21.2625 24.2654 20.9957C24.4184 20.7288 24.4984 20.4263 24.4973 20.1187C24.4962 19.8111 24.4141 19.5092 24.2591 19.2434ZM13.9997 23.625C13.457 23.6248 12.9277 23.4565 12.4846 23.1431C12.0416 22.8297 11.7065 22.3867 11.5256 21.875H16.4738C16.2929 22.3867 15.9578 22.8297 15.5148 23.1431C15.0717 23.4565 14.5424 23.6248 13.9997 23.625ZM5.24971 20.125C6.0919 18.6769 6.99971 15.3212 6.99971 11.375C6.99971 9.51848 7.73721 7.73801 9.04996 6.42525C10.3627 5.1125 12.1432 4.375 13.9997 4.375C15.8562 4.375 17.6367 5.1125 18.9495 6.42525C20.2622 7.73801 20.9997 9.51848 20.9997 11.375C20.9997 15.318 21.9053 18.6736 22.7497 20.125H5.24971Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

function Chat({ color }: { color: string }) {
  return (
    <div className="cursor-pointer">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.8113 2.68876C21.6226 2.50025 21.3872 2.36544 21.1291 2.29821C20.8711 2.23098 20.5997 2.23376 20.3431 2.30626H20.3291L2.33469 7.76625C2.04177 7.85049 1.78147 8.02196 1.58844 8.25784C1.3954 8.49371 1.27881 8.78278 1.25417 9.08658C1.22953 9.39037 1.29803 9.69445 1.45053 9.95835C1.60303 10.2222 1.8323 10.4334 2.10781 10.5638L10.1347 14.3653L13.9363 22.3922C14.0563 22.6492 14.2473 22.8666 14.4869 23.0186C14.7264 23.1706 15.0044 23.2509 15.2881 23.25C15.3313 23.25 15.3744 23.2481 15.4175 23.2444C15.7202 23.2199 16.0082 23.1034 16.2428 22.9105C16.4774 22.7176 16.6474 22.4576 16.73 22.1653L22.1863 4.17094C22.1863 4.16626 22.1863 4.16157 22.1863 4.15688C22.2597 3.90091 22.2637 3.63 22.1978 3.37199C22.1319 3.11397 21.9985 2.87815 21.8113 2.68876ZM15.2966 21.7359L15.2919 21.7491L11.6019 13.9594L16.0306 9.52969C16.1653 9.3879 16.2393 9.19908 16.2368 9.00351C16.2343 8.80794 16.1555 8.62108 16.0172 8.48278C15.8789 8.34448 15.6921 8.26568 15.4965 8.26317C15.3009 8.26067 15.1121 8.33466 14.9703 8.46938L10.5406 12.8981L2.75 9.20813H2.76313L20.75 3.75001L15.2966 21.7359Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

const toggleOnLogo = ({ svgSize }: { svgSize: string }) => (
  <div>
    <svg
      width={svgSize}
      height="50"
      viewBox="0 0 140 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M18.7235 4.49538C10.8365 4.49538 4.44285 10.9646 4.44285 18.9448C4.44285 22.9734 6.06931 26.6135 8.69964 29.2365C9.57344 30.1079 9.58365 31.531 8.72245 32.4152C7.86125 33.2993 6.45475 33.3096 5.58096 32.4382C2.13827 29.0051 0 24.2255 0 18.9448C0 8.48188 8.38278 0 18.7235 0C29.0641 0 37.4469 8.48188 37.4469 18.9448C37.4469 27.8408 31.389 35.2996 23.2225 37.3386C22.0313 37.636 20.8275 36.9001 20.5336 35.6949C20.2396 34.4896 20.967 33.2715 22.1581 32.9741C28.3872 31.4189 33.0041 25.7246 33.0041 18.9448C33.0041 10.9646 26.6104 4.49538 18.7235 4.49538Z"
        fill="#474C51"
      />
      <path
        d="M18.7235 20.5503C19.9503 20.5503 20.9449 21.5566 20.9449 22.798C20.9449 33.2609 12.5621 41.7428 2.22143 41.7428C0.994567 41.7428 0 40.7365 0 39.4951C0 38.2537 0.994567 37.2474 2.22143 37.2474C10.1084 37.2474 16.502 30.7782 16.502 22.798C16.502 21.5566 17.4966 20.5503 18.7235 20.5503Z"
        fill="#474C51"
      />
      <path
        d="M46.1251 32.8169C46.4848 32.8169 46.8762 32.7848 47.2993 32.7206C47.7436 32.635 48.0715 32.5279 48.2831 32.3995V29.8307L45.9982 30.0234C45.4058 30.0662 44.9192 30.1946 44.5384 30.4087C44.1576 30.6228 43.9672 30.9438 43.9672 31.372C43.9672 31.8001 44.1259 32.1533 44.4432 32.4316C44.7817 32.6885 45.3423 32.8169 46.1251 32.8169ZM45.8713 20.1978C47.0137 20.1978 48.0504 20.3155 48.9813 20.551C49.9333 20.7864 50.7372 21.1503 51.3931 21.6427C52.0701 22.1136 52.5884 22.7237 52.9481 23.473C53.3078 24.2008 53.4876 25.0677 53.4876 26.0739V33.2665C53.4876 33.823 53.3289 34.2833 53.0116 34.6472C52.7154 34.9897 52.3557 35.2894 51.9326 35.5463C50.5574 36.3811 48.6216 36.7985 46.1251 36.7985C45.0038 36.7985 43.9883 36.6915 43.0786 36.4774C42.19 36.2634 41.4178 35.9423 40.762 35.5142C40.1273 35.086 39.6301 34.5402 39.2705 33.8765C38.9319 33.2129 38.7627 32.4423 38.7627 31.5646C38.7627 30.0876 39.1964 28.953 40.0638 28.161C40.9312 27.369 42.2747 26.8766 44.0941 26.6839L48.2514 26.2344V26.0096C48.2514 25.3888 47.9763 24.95 47.4263 24.6931C46.8973 24.4148 46.1251 24.2757 45.1096 24.2757C44.3057 24.2757 43.5229 24.3613 42.7613 24.5326C41.9996 24.7038 41.312 24.9179 40.6985 25.1748C40.4235 24.9821 40.1908 24.6931 40.0003 24.3078C39.8099 23.9011 39.7147 23.4837 39.7147 23.0555C39.7147 22.499 39.8417 22.0601 40.0956 21.739C40.3706 21.3965 40.7831 21.1075 41.3332 20.8721C41.9467 20.6366 42.6661 20.4653 43.4912 20.3583C44.3374 20.2513 45.1308 20.1978 45.8713 20.1978Z"
        fill="#474C51"
      />
      <path
        d="M65.3598 35.8031C65.0636 36.06 64.6616 36.2634 64.1539 36.4132C63.6461 36.5845 63.0432 36.6701 62.345 36.6701C61.4776 36.6701 60.7266 36.5417 60.0919 36.2848C59.4572 36.0493 59.034 35.7068 58.8225 35.2573C58.5898 34.7435 58.3147 33.9301 57.9974 32.8169C57.7012 31.7038 57.405 30.4836 57.1088 29.1564C56.8126 27.8292 56.527 26.4806 56.252 25.1106C55.9981 23.7405 55.7971 22.5311 55.649 21.4821C55.9452 21.1825 56.3366 20.9256 56.8232 20.7115C57.3309 20.476 57.881 20.3583 58.4734 20.3583C59.2139 20.3583 59.8168 20.5296 60.2823 20.8721C60.7689 21.1932 61.0651 21.7604 61.1708 22.5739C61.3824 24.2008 61.5622 25.5494 61.7103 26.6197C61.8584 27.6686 61.9748 28.5356 62.0594 29.2206C62.1652 29.8842 62.2392 30.398 62.2816 30.7619C62.345 31.1044 62.3979 31.3827 62.4402 31.5968H62.5672C62.6306 31.2542 62.7364 30.7619 62.8845 30.1197C63.0538 29.4561 63.2442 28.7069 63.4557 27.872C63.6673 27.0372 63.8894 26.1381 64.1222 25.1748C64.3549 24.1901 64.5876 23.2161 64.8203 22.2528C65.2435 22.0173 65.656 21.8354 66.058 21.7069C66.4811 21.5785 66.9994 21.5143 67.613 21.5143C68.3535 21.5143 68.9881 21.632 69.5171 21.8675C70.046 22.1029 70.3845 22.4669 70.5326 22.9592C70.7864 23.9011 71.0297 24.8216 71.2625 25.7206C71.4952 26.5983 71.7067 27.4225 71.8972 28.1931C72.0876 28.9423 72.2568 29.6166 72.4049 30.216C72.553 30.794 72.6588 31.2542 72.7223 31.5968H72.8809C73.1137 29.9484 73.3358 28.2359 73.5474 26.4592C73.7801 24.6824 73.9916 22.8736 74.1821 21.0326C74.5629 20.7971 74.9648 20.6259 75.388 20.5189C75.8111 20.4118 76.2342 20.3583 76.6574 20.3583C77.3978 20.3583 78.0114 20.5189 78.498 20.84C78.9846 21.161 79.2279 21.7176 79.2279 22.5097C79.2279 22.8522 79.175 23.3659 79.0692 24.0509C78.9634 24.7359 78.8259 25.5066 78.6566 26.3628C78.4874 27.2191 78.2864 28.1182 78.0537 29.0601C77.8421 30.002 77.62 30.9117 77.3873 31.7894C77.1757 32.6671 76.9641 33.4591 76.7526 34.1655C76.5621 34.872 76.3929 35.4178 76.2448 35.8031C75.9486 36.06 75.4938 36.2634 74.8802 36.4132C74.2667 36.5845 73.6108 36.6701 72.9127 36.6701C71.1355 36.6701 70.0883 36.2206 69.7709 35.3215C69.644 34.9362 69.4853 34.4545 69.2949 33.8765C69.1045 33.2772 68.9035 32.6243 68.692 31.9178C68.4804 31.2114 68.2794 30.4836 68.089 29.7344C67.8986 28.9637 67.7399 28.2252 67.613 27.5188C67.4649 28.268 67.285 29.0494 67.0735 29.8628C66.8619 30.6549 66.6398 31.4362 66.4071 32.2068C66.1955 32.9561 65.9945 33.6518 65.8041 34.294C65.6137 34.9148 65.4656 35.4178 65.3598 35.8031Z"
        fill="#474C51"
      />
      <path
        d="M88.7488 20.1978C90.0181 20.1978 91.1923 20.369 92.2713 20.7115C93.3714 21.0326 94.3129 21.5357 95.0957 22.2207C95.8785 22.9057 96.492 23.7727 96.9363 24.8216C97.3806 25.8491 97.6027 27.08 97.6027 28.5142C97.6027 29.8842 97.4123 31.083 97.0315 32.1105C96.6507 33.138 96.1112 34.005 95.413 34.7114C94.7149 35.3964 93.8686 35.9102 92.8743 36.2527C91.9011 36.5952 90.8115 36.7664 89.6056 36.7664C88.6959 36.7664 87.8496 36.6273 87.0668 36.349V41.6792C86.8553 41.7435 86.5168 41.8077 86.0513 41.8719C85.5859 41.9575 85.1098 42.0003 84.6232 42.0003C84.1578 42.0003 83.7347 41.9682 83.3539 41.904C82.9942 41.8398 82.6874 41.7113 82.4336 41.5187C82.1797 41.326 81.9893 41.0585 81.8623 40.7159C81.7354 40.3948 81.6719 39.9667 81.6719 39.4316V24.0188C81.6719 23.4408 81.7883 22.9699 82.021 22.606C82.2749 22.2421 82.6134 21.9103 83.0365 21.6106C83.6924 21.1825 84.5069 20.84 85.4801 20.5831C86.4533 20.3262 87.5428 20.1978 88.7488 20.1978ZM88.8122 32.4637C90.9913 32.4637 92.0809 31.1472 92.0809 28.5142C92.0809 27.1442 91.8059 26.1274 91.2558 25.4638C90.7269 24.8002 89.9547 24.4684 88.9392 24.4684C88.5372 24.4684 88.1775 24.5219 87.8602 24.6289C87.5428 24.7145 87.2678 24.8216 87.0351 24.95V32.0142C87.289 32.1426 87.564 32.2497 87.8602 32.3353C88.1564 32.4209 88.4737 32.4637 88.8122 32.4637Z"
        fill="#474C51"
      />
      <path
        d="M106.898 32.8169C107.258 32.8169 107.649 32.7848 108.072 32.7206C108.517 32.635 108.845 32.5279 109.056 32.3995V29.8307L106.771 30.0234C106.179 30.0662 105.692 30.1946 105.312 30.4087C104.931 30.6228 104.74 30.9438 104.74 31.372C104.74 31.8001 104.899 32.1533 105.216 32.4316C105.555 32.6885 106.115 32.8169 106.898 32.8169ZM106.644 20.1978C107.787 20.1978 108.823 20.3155 109.754 20.551C110.706 20.7864 111.51 21.1503 112.166 21.6427C112.843 22.1136 113.362 22.7237 113.721 23.473C114.081 24.2008 114.261 25.0677 114.261 26.0739V33.2665C114.261 33.823 114.102 34.2833 113.785 34.6472C113.488 34.9897 113.129 35.2894 112.706 35.5463C111.331 36.3811 109.395 36.7985 106.898 36.7985C105.777 36.7985 104.761 36.6915 103.852 36.4774C102.963 36.2634 102.191 35.9423 101.535 35.5142C100.9 35.086 100.403 34.5402 100.044 33.8765C99.7051 33.2129 99.5358 32.4423 99.5358 31.5646C99.5358 30.0876 99.9695 28.953 100.837 28.161C101.704 27.369 103.048 26.8766 104.867 26.6839L109.024 26.2344V26.0096C109.024 25.3888 108.749 24.95 108.199 24.6931C107.67 24.4148 106.898 24.2757 105.883 24.2757C105.079 24.2757 104.296 24.3613 103.534 24.5326C102.773 24.7038 102.085 24.9179 101.472 25.1748C101.197 24.9821 100.964 24.6931 100.773 24.3078C100.583 23.9011 100.488 23.4837 100.488 23.0555C100.488 22.499 100.615 22.0601 100.869 21.739C101.144 21.3965 101.556 21.1075 102.106 20.8721C102.72 20.6366 103.439 20.4653 104.264 20.3583C105.111 20.2513 105.904 20.1978 106.644 20.1978Z"
        fill="#474C51"
      />
      <path
        d="M126.133 35.8031C125.837 36.06 125.435 36.2634 124.927 36.4132C124.419 36.5845 123.816 36.6701 123.118 36.6701C122.251 36.6701 121.5 36.5417 120.865 36.2848C120.23 36.0493 119.807 35.7068 119.596 35.2573C119.363 34.7435 119.088 33.9301 118.77 32.8169C118.474 31.7038 118.178 30.4836 117.882 29.1564C117.586 27.8292 117.3 26.4806 117.025 25.1106C116.771 23.7405 116.57 22.5311 116.422 21.4821C116.718 21.1825 117.11 20.9256 117.596 20.7115C118.104 20.476 118.654 20.3583 119.247 20.3583C119.987 20.3583 120.59 20.5296 121.055 20.8721C121.542 21.1932 121.838 21.7604 121.944 22.5739C122.156 24.2008 122.335 25.5494 122.483 26.6197C122.632 27.6686 122.748 28.5356 122.833 29.2206C122.938 29.8842 123.012 30.398 123.055 30.7619C123.118 31.1044 123.171 31.3827 123.213 31.5968H123.34C123.404 31.2542 123.51 30.7619 123.658 30.1197C123.827 29.4561 124.017 28.7069 124.229 27.872C124.44 27.0372 124.663 26.1381 124.895 25.1748C125.128 24.1901 125.361 23.2161 125.593 22.2528C126.017 22.0173 126.429 21.8354 126.831 21.7069C127.254 21.5785 127.773 21.5143 128.386 21.5143C129.127 21.5143 129.761 21.632 130.29 21.8675C130.819 22.1029 131.158 22.4669 131.306 22.9592C131.56 23.9011 131.803 24.8216 132.036 25.7206C132.268 26.5983 132.48 27.4225 132.67 28.1931C132.861 28.9423 133.03 29.6166 133.178 30.216C133.326 30.794 133.432 31.2542 133.495 31.5968H133.654C133.887 29.9484 134.109 28.2359 134.32 26.4592C134.553 24.6824 134.765 22.8736 134.955 21.0326C135.336 20.7971 135.738 20.6259 136.161 20.5189C136.584 20.4118 137.007 20.3583 137.43 20.3583C138.171 20.3583 138.784 20.5189 139.271 20.84C139.758 21.161 140.001 21.7176 140.001 22.5097C140.001 22.8522 139.948 23.3659 139.842 24.0509C139.737 24.7359 139.599 25.5066 139.43 26.3628C139.261 27.2191 139.06 28.1182 138.827 29.0601C138.615 30.002 138.393 30.9117 138.16 31.7894C137.949 32.6671 137.737 33.4591 137.526 34.1655C137.335 34.872 137.166 35.4178 137.018 35.8031C136.722 36.06 136.267 36.2634 135.653 36.4132C135.04 36.5845 134.384 36.6701 133.686 36.6701C131.909 36.6701 130.861 36.2206 130.544 35.3215C130.417 34.9362 130.258 34.4545 130.068 33.8765C129.878 33.2772 129.677 32.6243 129.465 31.9178C129.254 31.2114 129.053 30.4836 128.862 29.7344C128.672 28.9637 128.513 28.2252 128.386 27.5188C128.238 28.268 128.058 29.0494 127.847 29.8628C127.635 30.6549 127.413 31.4362 127.18 32.2068C126.969 32.9561 126.768 33.6518 126.577 34.294C126.387 34.9148 126.239 35.4178 126.133 35.8031Z"
        fill="#474C51"
      />
    </svg>
  </div>
);

const toggleOffLogo = () => (
  <div>
    <svg
      width="42"
      height="60"
      viewBox="0 0 50 70"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <path
        d="M41.1553 18.4642C41.1553 27.4309 33.9125 34.6997 24.978 34.6997C16.0436 34.6997 8.80078 27.4309 8.80078 18.4642C8.80078 9.49763 16.0436 2.22876 24.978 2.22876C33.9125 2.22876 41.1553 9.49763 41.1553 18.4642Z"
        fill="#F7F8F9"
      />
      <path
        d="M24.9785 4.4568C17.0952 4.4568 10.7045 10.8705 10.7045 18.7822C10.7045 22.7762 12.3302 26.3851 14.9593 28.9856C15.8327 29.8495 15.8429 31.2604 14.9821 32.137C14.1213 33.0135 12.7155 33.0238 11.8421 32.1599C8.40096 28.7561 6.26367 24.0176 6.26367 18.7822C6.26367 8.40909 14.6426 0 24.9785 0C35.3145 0 43.6934 8.40909 43.6934 18.7822C43.6934 27.6019 37.6383 34.9967 29.4755 37.0182C28.2849 37.313 27.0816 36.5834 26.7878 35.3885C26.494 34.1936 27.221 32.986 28.4116 32.6911C34.6378 31.1492 39.2526 25.5038 39.2526 18.7822C39.2526 10.8705 32.8619 4.4568 24.9785 4.4568Z"
        fill="#474C51"
      />
      <path
        d="M24.9785 20.3743C26.2048 20.3743 27.199 21.372 27.199 22.6027C27.199 32.9758 18.82 41.3849 8.48408 41.3849C7.25778 41.3849 6.26367 40.3872 6.26367 39.1565C6.26367 37.9258 7.25778 36.9281 8.48408 36.9281C16.3674 36.9281 22.7581 30.5144 22.7581 22.6027C22.7581 21.372 23.7522 20.3743 24.9785 20.3743Z"
        fill="#474C51"
      />
      <path
        d="M2.97091 50.9216C3.50381 50.9216 3.99674 50.9929 4.4497 51.1356C4.91154 51.2693 5.30678 51.4787 5.6354 51.764C5.96402 52.0492 6.22159 52.4102 6.4081 52.847C6.59461 53.2748 6.68787 53.7874 6.68787 54.3846C6.68787 54.955 6.60794 55.4542 6.44807 55.882C6.2882 56.3099 6.06172 56.6709 5.76862 56.9651C5.47553 57.2503 5.12026 57.4642 4.70283 57.6068C4.29427 57.7494 3.83687 57.8208 3.33061 57.8208C2.9487 57.8208 2.59344 57.7628 2.26482 57.6469V59.8664C2.176 59.8932 2.03389 59.9199 1.8385 59.9467C1.6431 59.9823 1.44327 60.0001 1.23899 60.0001C1.04359 60.0001 0.86596 59.9868 0.70609 59.96C0.555102 59.9333 0.426319 59.8798 0.319739 59.7996C0.213159 59.7194 0.133225 59.6079 0.0799348 59.4653C0.0266449 59.3316 0 59.1533 0 58.9305V52.5127C0 52.272 0.048849 52.0759 0.146547 51.9244C0.253127 51.7729 0.395233 51.6347 0.572866 51.5099C0.848196 51.3317 1.19014 51.189 1.59869 51.0821C2.00725 50.9751 2.46465 50.9216 2.97091 50.9216ZM2.99755 56.0291C3.91236 56.0291 4.36977 55.4809 4.36977 54.3846C4.36977 53.8141 4.2543 53.3907 4.02338 53.1144C3.80134 52.8381 3.47716 52.6999 3.05084 52.6999C2.88209 52.6999 2.7311 52.7222 2.59788 52.7667C2.46465 52.8024 2.34919 52.847 2.25149 52.9005V55.8419C2.35807 55.8954 2.47354 55.94 2.59788 55.9756C2.72222 56.0113 2.85545 56.0291 2.99755 56.0291Z"
        fill="#474C51"
      />
      <path
        d="M10.5902 56.1762C10.7412 56.1762 10.9055 56.1628 11.0831 56.1361C11.2697 56.1004 11.4073 56.0559 11.4961 56.0024V54.9328L10.5369 55.013C10.2882 55.0308 10.084 55.0843 9.92408 55.1734C9.76421 55.2626 9.68428 55.3963 9.68428 55.5745C9.68428 55.7528 9.75089 55.8999 9.88412 56.0158C10.0262 56.1227 10.2616 56.1762 10.5902 56.1762ZM10.4836 50.9216C10.9632 50.9216 11.3984 50.9707 11.7892 51.0687C12.1889 51.1668 12.5264 51.3183 12.8017 51.5233C13.0859 51.7194 13.3035 51.9734 13.4545 52.2854C13.6055 52.5885 13.681 52.9495 13.681 53.3684V56.3634C13.681 56.5951 13.6144 56.7868 13.4812 56.9383C13.3568 57.0809 13.2058 57.2057 13.0282 57.3127C12.4509 57.6603 11.6382 57.8341 10.5902 57.8341C10.1195 57.8341 9.69316 57.7896 9.31125 57.7004C8.93822 57.6113 8.61404 57.4776 8.33871 57.2993C8.07226 57.121 7.86354 56.8937 7.71256 56.6174C7.57045 56.3411 7.4994 56.0202 7.4994 55.6548C7.4994 55.0397 7.68147 54.5673 8.04562 54.2375C8.40976 53.9077 8.97375 53.7027 9.73757 53.6225L11.4828 53.4353V53.3417C11.4828 53.0832 11.3673 52.9005 11.1364 52.7935C10.9144 52.6776 10.5902 52.6197 10.1639 52.6197C9.82638 52.6197 9.49776 52.6553 9.17803 52.7266C8.85829 52.7979 8.56963 52.8871 8.31207 52.994C8.19661 52.9138 8.09891 52.7935 8.01897 52.633C7.93904 52.4637 7.89907 52.2899 7.89907 52.1116C7.89907 51.8798 7.95236 51.6971 8.05894 51.5634C8.1744 51.4208 8.34759 51.3005 8.57852 51.2024C8.83608 51.1044 9.13806 51.0331 9.48444 50.9885C9.83971 50.9439 10.1728 50.9216 10.4836 50.9216Z"
        fill="#474C51"
      />
      <path
        d="M18.6651 57.4196C18.5407 57.5266 18.372 57.6113 18.1588 57.6737C17.9457 57.745 17.6925 57.7806 17.3994 57.7806C17.0353 57.7806 16.72 57.7272 16.4535 57.6202C16.1871 57.5222 16.0095 57.3795 15.9206 57.1923C15.8229 56.9784 15.7075 56.6397 15.5743 56.1762C15.4499 55.7127 15.3256 55.2046 15.2012 54.652C15.0769 54.0993 14.957 53.5378 14.8415 52.9673C14.7349 52.3968 14.6506 51.8932 14.5884 51.4564C14.7127 51.3317 14.8771 51.2247 15.0813 51.1356C15.2945 51.0375 15.5254 50.9885 15.7741 50.9885C16.085 50.9885 16.3381 51.0598 16.5335 51.2024C16.7378 51.3361 16.8621 51.5723 16.9065 51.911C16.9953 52.5885 17.0708 53.15 17.133 53.5957C17.1952 54.0325 17.244 54.3935 17.2795 54.6787C17.3239 54.955 17.355 55.169 17.3728 55.3205C17.3994 55.4631 17.4216 55.579 17.4394 55.6681H17.4927C17.5193 55.5255 17.5637 55.3205 17.6259 55.0531C17.697 54.7768 17.7769 54.4648 17.8657 54.1172C17.9545 53.7695 18.0478 53.3952 18.1455 52.994C18.2432 52.584 18.3409 52.1784 18.4386 51.7773C18.6162 51.6793 18.7894 51.6035 18.9582 51.55C19.1358 51.4966 19.3534 51.4698 19.611 51.4698C19.9218 51.4698 20.1883 51.5188 20.4103 51.6169C20.6324 51.7149 20.7745 51.8665 20.8366 52.0715C20.9432 52.4637 21.0454 52.847 21.143 53.2213C21.2407 53.5868 21.3296 53.93 21.4095 54.2509C21.4894 54.5628 21.5605 54.8436 21.6227 55.0932C21.6848 55.3339 21.7292 55.5255 21.7559 55.6681H21.8225C21.9202 54.9818 22.0134 54.2687 22.1023 53.5289C22.2 52.789 22.2888 52.0358 22.3687 51.2693C22.5286 51.1712 22.6973 51.0999 22.875 51.0553C23.0526 51.0108 23.2302 50.9885 23.4079 50.9885C23.7187 50.9885 23.9763 51.0553 24.1806 51.189C24.3848 51.3227 24.487 51.5545 24.487 51.8843C24.487 52.0269 24.4648 52.2408 24.4204 52.5261C24.376 52.8113 24.3182 53.1322 24.2472 53.4887C24.1761 53.8453 24.0918 54.2197 23.9941 54.6119C23.9052 55.0041 23.812 55.3829 23.7143 55.7483C23.6255 56.1138 23.5366 56.4436 23.4478 56.7378C23.3679 57.0319 23.2968 57.2592 23.2347 57.4196C23.1103 57.5266 22.9194 57.6113 22.6618 57.6737C22.4042 57.745 22.1289 57.7806 21.8358 57.7806C21.0898 57.7806 20.6501 57.5935 20.5169 57.2191C20.4636 57.0586 20.397 56.8581 20.3171 56.6174C20.2371 56.3678 20.1527 56.096 20.0639 55.8018C19.9751 55.5077 19.8907 55.2046 19.8108 54.8926C19.7309 54.5718 19.6643 54.2642 19.611 53.9701C19.5488 54.2821 19.4733 54.6074 19.3845 54.9461C19.2957 55.2759 19.2024 55.6013 19.1047 55.9222C19.0159 56.2341 18.9315 56.5238 18.8516 56.7912C18.7717 57.0497 18.7095 57.2592 18.6651 57.4196Z"
        fill="#474C51"
      />
      <path
        d="M28.4839 50.9216C29.0168 50.9216 29.5098 50.9929 29.9627 51.1356C30.4246 51.2693 30.8198 51.4787 31.1484 51.764C31.477 52.0492 31.7346 52.4102 31.9211 52.847C32.1076 53.2748 32.2009 53.7874 32.2009 54.3846C32.2009 54.955 32.121 55.4542 31.9611 55.882C31.8012 56.3099 31.5747 56.6709 31.2816 56.9651C30.9886 57.2503 30.6333 57.4642 30.2158 57.6068C29.8073 57.7494 29.3499 57.8208 28.8436 57.8208C28.4617 57.8208 28.1065 57.7628 27.7778 57.6469V59.8664C27.689 59.8932 27.5469 59.9199 27.3515 59.9467C27.1561 59.9823 26.9563 60.0001 26.752 60.0001C26.5566 60.0001 26.379 59.9868 26.2191 59.96C26.0681 59.9333 25.9393 59.8798 25.8328 59.7996C25.7262 59.7194 25.6462 59.6079 25.593 59.4653C25.5397 59.3316 25.513 59.1533 25.513 58.9305V52.5127C25.513 52.272 25.5619 52.0759 25.6596 51.9244C25.7661 51.7729 25.9083 51.6347 26.0859 51.5099C26.3612 51.3317 26.7032 51.189 27.1117 51.0821C27.5203 50.9751 27.9777 50.9216 28.4839 50.9216ZM28.5106 56.0291C29.4254 56.0291 29.8828 55.4809 29.8828 54.3846C29.8828 53.8141 29.7673 53.3907 29.5364 53.1144C29.3144 52.8381 28.9902 52.6999 28.5639 52.6999C28.3951 52.6999 28.2441 52.7222 28.1109 52.7667C27.9777 52.8024 27.8622 52.847 27.7645 52.9005V55.8419C27.8711 55.8954 27.9866 55.94 28.1109 55.9756C28.2352 56.0113 28.3685 56.0291 28.5106 56.0291Z"
        fill="#474C51"
      />
      <path
        d="M36.1032 56.1762C36.2542 56.1762 36.4185 56.1628 36.5962 56.1361C36.7827 56.1004 36.9203 56.0559 37.0092 56.0024V54.9328L36.0499 55.013C35.8013 55.0308 35.597 55.0843 35.4371 55.1734C35.2772 55.2626 35.1973 55.3963 35.1973 55.5745C35.1973 55.7528 35.2639 55.8999 35.3971 56.0158C35.5392 56.1227 35.7746 56.1762 36.1032 56.1762ZM35.9966 50.9216C36.4763 50.9216 36.9115 50.9707 37.3022 51.0687C37.7019 51.1668 38.0394 51.3183 38.3148 51.5233C38.599 51.7194 38.8166 51.9734 38.9676 52.2854C39.1185 52.5885 39.194 52.9495 39.194 53.3684V56.3634C39.194 56.5951 39.1274 56.7868 38.9942 56.9383C38.8699 57.0809 38.7189 57.2057 38.5412 57.3127C37.9639 57.6603 37.1513 57.8341 36.1032 57.8341C35.6325 57.8341 35.2062 57.7896 34.8243 57.7004C34.4512 57.6113 34.1271 57.4776 33.8517 57.2993C33.5853 57.121 33.3766 56.8937 33.2256 56.6174C33.0835 56.3411 33.0124 56.0202 33.0124 55.6548C33.0124 55.0397 33.1945 54.5673 33.5586 54.2375C33.9228 53.9077 34.4868 53.7027 35.2506 53.6225L36.9958 53.4353V53.3417C36.9958 53.0832 36.8804 52.9005 36.6494 52.7935C36.4274 52.6776 36.1032 52.6197 35.6769 52.6197C35.3394 52.6197 35.0108 52.6553 34.691 52.7266C34.3713 52.7979 34.0827 52.8871 33.8251 52.994C33.7096 52.9138 33.6119 52.7935 33.532 52.633C33.4521 52.4637 33.4121 52.2899 33.4121 52.1116C33.4121 51.8798 33.4654 51.6971 33.572 51.5634C33.6874 51.4208 33.8606 51.3005 34.0915 51.2024C34.3491 51.1044 34.6511 51.0331 34.9975 50.9885C35.3527 50.9439 35.6858 50.9216 35.9966 50.9216Z"
        fill="#474C51"
      />
      <path
        d="M44.1781 57.4196C44.0537 57.5266 43.885 57.6113 43.6718 57.6737C43.4587 57.745 43.2056 57.7806 42.9125 57.7806C42.5483 57.7806 42.233 57.7272 41.9666 57.6202C41.7001 57.5222 41.5225 57.3795 41.4337 57.1923C41.336 56.9784 41.2205 56.6397 41.0873 56.1762C40.9629 55.7127 40.8386 55.2046 40.7142 54.652C40.5899 54.0993 40.47 53.5378 40.3545 52.9673C40.248 52.3968 40.1636 51.8932 40.1014 51.4564C40.2258 51.3317 40.3901 51.2247 40.5944 51.1356C40.8075 51.0375 41.0384 50.9885 41.2871 50.9885C41.598 50.9885 41.8511 51.0598 42.0465 51.2024C42.2508 51.3361 42.3751 51.5723 42.4195 51.911C42.5083 52.5885 42.5838 53.15 42.646 53.5957C42.7082 54.0325 42.757 54.3935 42.7926 54.6787C42.837 54.955 42.868 55.169 42.8858 55.3205C42.9125 55.4631 42.9347 55.579 42.9524 55.6681H43.0057C43.0324 55.5255 43.0768 55.3205 43.1389 55.0531C43.21 54.7768 43.2899 54.4648 43.3787 54.1172C43.4676 53.7695 43.5608 53.3952 43.6585 52.994C43.7562 52.584 43.8539 52.1784 43.9516 51.7773C44.1292 51.6793 44.3024 51.6035 44.4712 51.55C44.6488 51.4966 44.8664 51.4698 45.124 51.4698C45.4348 51.4698 45.7013 51.5188 45.9233 51.6169C46.1454 51.7149 46.2875 51.8665 46.3496 52.0715C46.4562 52.4637 46.5584 52.847 46.6561 53.2213C46.7538 53.5868 46.8426 53.93 46.9225 54.2509C47.0024 54.5628 47.0735 54.8436 47.1357 55.0932C47.1978 55.3339 47.2423 55.5255 47.2689 55.6681H47.3355C47.4332 54.9818 47.5265 54.2687 47.6153 53.5289C47.713 52.789 47.8018 52.0358 47.8817 51.2693C48.0416 51.1712 48.2104 51.0999 48.388 51.0553C48.5656 51.0108 48.7433 50.9885 48.9209 50.9885C49.2317 50.9885 49.4893 51.0553 49.6936 51.189C49.8979 51.3227 50 51.5545 50 51.8843C50 52.0269 49.9778 52.2408 49.9334 52.5261C49.889 52.8113 49.8312 53.1322 49.7602 53.4887C49.6891 53.8453 49.6048 54.2197 49.5071 54.6119C49.4183 55.0041 49.325 55.3829 49.2273 55.7483C49.1385 56.1138 49.0497 56.4436 48.9608 56.7378C48.8809 57.0319 48.8099 57.2592 48.7477 57.4196C48.6233 57.5266 48.4324 57.6113 48.1748 57.6737C47.9173 57.745 47.6419 57.7806 47.3488 57.7806C46.6028 57.7806 46.1631 57.5935 46.0299 57.2191C45.9766 57.0586 45.91 56.8581 45.8301 56.6174C45.7501 56.3678 45.6658 56.096 45.5769 55.8018C45.4881 55.5077 45.4038 55.2046 45.3238 54.8926C45.2439 54.5718 45.1773 54.2642 45.124 53.9701C45.0618 54.2821 44.9863 54.6074 44.8975 54.9461C44.8087 55.2759 44.7154 55.6013 44.6177 55.9222C44.5289 56.2341 44.4445 56.5238 44.3646 56.7912C44.2847 57.0497 44.2225 57.2592 44.1781 57.4196Z"
        fill="#474C51"
      />
    </svg>
  </div>
);

const DesktopSvg = {
  Feed,
  Community,
  Pawzone,
  Mypage,
  Search,
  Alert,
  Chat,
  toggleOnLogo,
  toggleOffLogo,
};

export default DesktopSvg;
