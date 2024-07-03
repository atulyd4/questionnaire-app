import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomButton = styled(Button)({
    borderRadius: 35,
    backgroundColor: "#9c27b0",
    padding: "9px 35px",
    fontSize: "15px",
    marginTop: "35px",
    '&:hover': {
        backgroundColor: "#0000ff", // Change to blue on hover

    },
});

function MyComponent() {
    return (
        <CustomButton
            variant="contained"

        >
            Submit
        </CustomButton>
    );
}

export default MyComponent;
