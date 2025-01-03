const innerContainer = document.querySelector(".inner-container");
const colorCodeInput = innerContainer.querySelector(".color-code");
const heightCodeInput = innerContainer.querySelector(".height-code");
const widthCodeInput = innerContainer.querySelector(".width-code");
const submitButton = innerContainer.querySelector(".submit-button");
const validCheck = () =>
{
    if (colorCodeInput.value === '' || widthCodeInput.value === '' || heightCodeInput.value === '')
    {
        return false;
    }
    return true;
}
const createBox = () =>
{
    if (validCheck()) //tra ve gia tri true thi create box
    {
        const colorCodeText = "background-color: " + colorCodeInput.value + ";";
        const widthCodeText = "width: " + widthCodeInput.value + ";";
        const heightCodeText = "height: " + heightCodeInput.value + ";";
        const stringStyle = colorCodeText + widthCodeText + heightCodeText;
        const boxDiv = document.querySelector(".box");
        if (boxDiv)
        {
            boxDiv.setAttribute("style", stringStyle);
            boxDiv.addEventListener("click", () =>
            {
                boxDiv.removeAttribute("style");
                colorCodeInput.value = '';
                widthCodeInput.value = '';
                heightCodeInput.value = '';
            })
        }
    }
    else
    {
       alert("Nhập thiếu dữ liệu. Vui lòng nhập đủ các thông số!");
    }
}
if (submitButton)
{
    submitButton.addEventListener("click", () => {
        createBox();
    })
}
