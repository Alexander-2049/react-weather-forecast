import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import i18n, { languages } from "../../i18next/i18n";
import useCurrentLanguage from '../../hooks/useCurrentLanguage';
import decodeLanguage from "../../utils/decodeLanguage";

const SelectLanguage = () => {
    const { changeLanguage } = i18n;
    const language = useCurrentLanguage();

    function handleChange(e) {
        changeLanguage(e.target.value);
    }

    return (
        <>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                onChange={handleChange}
            >
                {languages.map(e => (
                    <MenuItem key={e} value={e}>{decodeLanguage(e)}</MenuItem>
                ))}
            </Select>
            </FormControl>
        </>
    );
};

export default SelectLanguage;