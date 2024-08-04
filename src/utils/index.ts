/**
 * Mask the local part of an email address.
 * @function maskEmail
 * @param {string} email - The email address to be masked.
 * @returns {string} The masked email address.
 */
export function maskEmail(email: string): string {
  const [localPart, domain] = email.split("@");
  if (localPart.length <= 2) {
    return `${localPart}***@${domain}`;
  }
  const maskedLocalPart = `${localPart.slice(0, 2)}***`;
  return `${maskedLocalPart}@${domain}`;
}

/**
 * Shrink a string to a specified length(len).
 * @function shrinkString
 * @param {string} str
 * @param {number} len
 * @returns {string}
 */
export const shrinkString = ({
  str,
  len,
}: {
  str?: string;
  len: number;
}): string => {
  if (!str) return "";
  if (str.length > len) {
    return str.slice(0, Math.max(0, len)) + "...";
  }
  return str;
};

/**
 * Returns an Encrypted a string .
 * @function encryptString - Encodes or encrypts a string using a base64 Buffer
 * @returns A encoded string .
 */
export const encryptString = (string_?: string): string => {
  if (!string_) return "";
  const buffer = Buffer.from(string_);
  return buffer.toString("base64");
};

/**
 * Decodes and Returns a string .
 * @function decryptString - Decodes or decrypts an encrypted string Buffer
 * @returns A decoded string .
 */

export const decryptString = (string_?: string): string => {
  if (!string_) return "";
  const buffer = Buffer.from(string_, "base64");
  return buffer.toString();
};

/**
 * Format the given time in seconds to a mm:ss string.
 * @function formatTime
 * @param {number} time - Time in seconds.
 * @returns {string} The formatted time string.
 */
export const formatTime = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
