import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Google Sans Regular", system-ui, sans-serif;
  }

  .engineering-theme {
    --surface: ${({ theme }) => theme.surface};
    --canvas: ${({ theme }) => theme.body};
    --ink: ${({ theme }) => theme.text};
    --muted: ${({ theme }) => theme.secondaryText};
    --line: ${({ theme }) => theme.border};
    --accent: ${({ theme }) => theme.accent};
  }
`;
