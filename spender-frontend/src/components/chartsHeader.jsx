import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

export default function ChartsHeader() {
    return (
        <ToggleButtonGroup
            type="radio"
            name="timePeriods"
            className="d-flex justify-content-between"
        >
            <ToggleButton className="rounded-0 bg-secondary border-secondary" value={"month"}>Month</ToggleButton>
            <ToggleButton className="rounded-0 bg-secondary border-secondary" value={"3months"}>3-Months</ToggleButton>
            <ToggleButton className="rounded-0 bg-secondary border-secondary" value={"year"}>Year</ToggleButton>
        </ToggleButtonGroup>
    );
}