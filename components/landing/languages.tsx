import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const languages: ILanguage[] = [
  { language: "English", code: "EN" },
  { language: "Spanish", code: "ES" },
  { language: "French", code: "FR" },
  { language: "German", code: "DE" },
  { language: "Chinese", code: "ZH" },
  { language: "Japanese", code: "JA" },
  { language: "Russian", code: "RU" },
  { language: "Arabic", code: "AR" },
  { language: "Portuguese", code: "PT" },
  { language: "Hindi", code: "HI" },
];

export default function Languages() {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder={`${languages[0].language} - ${languages[0].code}`}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Languages</SelectLabel>
          {languages.map((ln: ILanguage) => (
            <SelectItem value={ln.code.toLowerCase()} key={ln.language}>
              {ln.language} - {ln.code}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
