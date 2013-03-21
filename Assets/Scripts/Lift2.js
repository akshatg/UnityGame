public static var liftTransform:Transform;

private var vel:float = 0.05;

function Start () {
	liftTransform = this.GetComponent(Transform);
}

function Update () {

	if(Input.GetKey(KeyCode.DownArrow))
	{
		liftTransform.position.y = liftTransform.position.y - vel;
	}
	if(Input.GetKey(KeyCode.UpArrow))
	{	
		liftTransform.position.y = liftTransform.position.y + vel;
	}
	
	
}