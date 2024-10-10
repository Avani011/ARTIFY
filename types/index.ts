interface IWrapper {
  className?: string;
  children: React.ReactNode;
}
interface ISiteConfig {
  name?: string;
  short?: string;
  desc?: string;
  logo?: string;
}
interface ILanguage {
  language: string;
  code: string;
}

interface IAuthProvider {
  isConnected?: boolean;
}

interface ILayout {
  children?: React.ReactNode;
}

interface IDropzone {
  onFilesSelected: (files: File[]) => void;
  setPreviews: any;
}
