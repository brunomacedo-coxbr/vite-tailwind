import '@testing-library/jest-dom';

/* jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: any) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {}),
    },
  }),
})); */

/* jest.mock("@auth0/auth0-react", () => ({
  Auth0Provider: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useAuth0: () => ({
    isAuthenticated: true,
    user: { name: "John Doe" },
    loginWithRedirect: jest.fn(),
    logout: jest.fn(),
    getAccessTokenSilently: jest.fn(() => "mocked-token"),
  }),
})); */

// HTMLCanvasElement Mock
// HTMLCanvasElement.prototype.getContext = jest.fn();

// Crypto API Mock
/* global.crypto = {
  getRandomValues: jest.fn((buffer) => buffer),
  subtle: {
    encrypt: jest.fn(),
    decrypt: jest.fn(),
    digest: jest.fn(),
    exportKey: jest.fn(),
    importKey: jest.fn(),
    sign: jest.fn(),
    verify: jest.fn(),
    generateKey: jest.fn(),
    deriveKey: jest.fn(),
    deriveBits: jest.fn(),
    wrapKey: jest.fn(),
    unwrapKey: jest.fn(),
  },
  randomUUID: jest.fn(() => "A-A-A-A-A`"),
}; */
