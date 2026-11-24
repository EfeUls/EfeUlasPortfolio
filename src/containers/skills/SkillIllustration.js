import React from "react";

function Frontend() {
  return (
    <>
      <rect x="88" y="53" width="264" height="170" rx="16" fill="white" />
      <path d="M88 87h264" />
      <path d="M107 70h1m12 0h1m12 0h1" strokeWidth="5" />
      <rect x="109" y="107" width="103" height="93" rx="9" fill="var(--skill-light)" stroke="none" />
      <path d="m145 142-13 12 13 12m31-24 13 12-13 12m-10-29-11 34" />
      <path d="M231 116h92" stroke="var(--skill-accent)" strokeWidth="8" />
      <path d="M231 137h66m-66 17h76" />
      <rect x="231" y="174" width="54" height="23" rx="6" fill="var(--skill-accent)" stroke="none" />
    </>
  );
}

function Desktop() {
  return (
    <>
      <path d="M200 204v28m40-28v28m-62 0h84" strokeWidth="5" />
      <rect x="78" y="45" width="284" height="163" rx="14" fill="white" />
      <path d="M78 181h284" />
      <path d="M218 195h4" strokeWidth="5" />
      <rect x="98" y="64" width="244" height="99" rx="8" fill="var(--skill-light)" stroke="none" />
      <rect x="118" y="81" width="205" height="64" rx="7" fill="white" />
      <path d="M118 100h205m-140 0v45m-45-55h1m11 0h1" />
      <path d="M133 113h34m-34 12h25m42-11h42m-42 13h32" stroke="var(--skill-accent)" />
      <rect x="266" y="110" width="42" height="24" rx="4" fill="var(--skill-light)" stroke="none" />
    </>
  );
}

function Embedded() {
  return (
    <>
      <rect x="106" y="62" width="228" height="154" rx="17" fill="var(--skill-light)" />
      <circle cx="123" cy="79" r="4" fill="white" />
      <circle cx="317" cy="79" r="4" fill="white" />
      <circle cx="123" cy="199" r="4" fill="white" />
      <circle cx="317" cy="199" r="4" fill="white" />
      <path d="M181 116h-23l-13-13h-17m53 33h-53m53 20h-23l-13 13h-17m131-53h18l13-13h20m-51 33h51m-51 20h18l13 13h20" stroke="var(--skill-accent)" />
      <path d="M200 99V86m20 13V86m20 13V86m-40 93v13m20-13v13m20-13v13" />
      <rect x="181" y="99" width="78" height="80" rx="9" fill="var(--skill-ink)" />
      <rect x="199" y="117" width="42" height="44" rx="5" fill="var(--skill-accent)" stroke="none" />
      <circle cx="208" cy="127" r="3" fill="white" stroke="none" />
    </>
  );
}

function Rocket() {
  return (
    <>
      <path d="M79 207h282m-247-82h24m-12-12v24m161-66h16m-8-8v16" opacity=".35" />
      <path d="M183 151c3-41 18-71 37-91 19 20 34 50 37 91l-17 23h-40z" fill="white" />
      <path d="M203 82a111 111 0 0 1 17-22c6 7 12 14 17 22z" fill="var(--skill-accent)" />
      <path d="m184 134-21 19-9 28 43-13m59-34 21 19 9 28-43-13" fill="var(--skill-light)" />
      <circle cx="220" cy="121" r="14" fill="var(--skill-light)" />
      <path d="M212 184v13m8-13v23m8-23v13" stroke="var(--skill-accent)" />
      <path d="M300 119a27 27 0 0 1 27 27m-27-16a16 16 0 0 1 16 16" stroke="var(--skill-accent)" />
      <circle cx="300" cy="146" r="3" fill="var(--skill-accent)" stroke="none" />
    </>
  );
}

function Linux() {
  return (
    <>
      <rect x="87" y="56" width="266" height="162" rx="15" fill="var(--skill-ink)" />
      <path d="M87 87h266m-247-15h1m12 0h1m12 0h1" stroke="var(--skill-light)" />
      <path d="m117 120 12 10-12 10m21 3h20m-41 18h65m-65 15h48" stroke="var(--skill-light)" />
      <path d="M254 148c0-20 11-36 26-36s26 16 26 36c9 11 13 27 10 40h-72c-3-13 1-29 10-40Z" fill="var(--skill-accent)" stroke="none" />
      <ellipse cx="280" cy="164" rx="22" ry="23" fill="white" stroke="none" />
      <path d="M273 134h1m12 0h1" strokeWidth="4" />
      <path d="m274 142 6 5 6-5z" fill="var(--skill-light)" stroke="none" />
      <path d="M249 189h17m28 0h17" stroke="var(--skill-light)" strokeWidth="5" />
    </>
  );
}

const illustrations = { Frontend, Desktop, Embedded, Rocket, Linux };

export default function SkillIllustration({ name, theme }) {
  const Illustration = illustrations[name];
  if (!Illustration) return null;

  return (
    <svg
      className="skill-illustration"
      viewBox="0 0 440 270"
      aria-hidden="true"
      focusable="false"
      fill="none"
      stroke="var(--skill-ink)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        "--skill-ink": theme.illustrationInk || theme.text,
        "--skill-accent": theme.imageHighlight,
        "--skill-light": theme.illustrationLight || theme.highlight,
      }}
    >
      <rect x="22" y="15" width="396" height="240" rx="46" fill="var(--skill-light)" opacity=".32" stroke="none" />
      <Illustration />
    </svg>
  );
}
