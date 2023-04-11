function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5wVHySXwv09":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxgshG5boQ8soSWU5PavWUeewjN1Bu-Qn-CeS637nxPPVb9pfhUtdEdVkUdp-VZCPD_Ng/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

