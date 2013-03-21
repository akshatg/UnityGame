var camTransform:Transform;


//private var vel:float = 0.05;

function Start () {
	camTransform = this.GetComponent(Transform);
}

function Update () {
//	if(Input.GetKey("d") && CharMove.goTransform.position.x > -4)
//	{
//		camTransform.position.x = camTransform.position.x - vel;
//	}
	if(Input.GetKey("d") || Input.GetKey("a")){
		
		//camTransform.position.x = CharMove.goTransform.position.x + 5;
	
		if (CharMove.goTransform.position.x < 0 && CharMove.goTransform.position.x > -5)
		camTransform.position.x = CharMove.goTransform.position.x + 5;
		}
		//CharMove.goTransform.position.x > -4)
	/*if(Input.GetKey("a") && CharMove.goTransform.position.x < -4 && CharMove.goTransform.position.x > -8)
	{	
		camTransform.position.x = camTransform.position.x + vel;
	}*/
}