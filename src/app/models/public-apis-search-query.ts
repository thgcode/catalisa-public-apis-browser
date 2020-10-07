/* Can't declare as interface because of this bug
https://github.com/microsoft/TypeScript/issues/15300
*/

export type PublicAPIsSearchQuery = {
  title?: string;
  description?: string;
  auth?: string;
  https?: string;
  cors?: string;
  category?: string;
};
