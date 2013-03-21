public static var goTransform:Transform;
var from : Quaternion;
var to : Quaternion;
var speed = 0.1;

private var vel:float = 0.05;//how fast the game object is being moved
private var liftVel:float = 0.00138;

//private var arrow:boolean = false;

//public var KeyID = event.keyCode;

//private var direction : Vector2 = Vector2.zero;

  

function Awake()
{
	goTransform = this.GetComponent(Transform);
	
	from = new Quaternion(0,0,0,0); 
	to = new Quaternion(1,1,1,1);
}

function OnGUI() {
    var e : Event = Event.current;
    if (e.isKey) {
        Debug.Log("Detected character: " + e.character);
    }
}

function Update()
{
	Debug.Log("Character Position x: " + goTransform.position.x + ", y: " + goTransform.position.y + ", z: " + goTransform.position.z);
	//var CharCenter = Vector3(goTransform.position.x,goTransform.position.y,goTransform.position.z);
	//var point = Vector3(7.33,0,0);
	
	if(Input.GetKey("d") && goTransform.position.x > -8.5)
	{
		goTransform.position.x = goTransform.position.x - vel;
	}
	
	if(Input.GetKey("a") && goTransform.position.y <= 0.4 && goTransform.position.x < 1)
	{	
		goTransform.position.x = goTransform.position.x + vel;
	}
	
	if(Input.GetKey("a") && goTransform.position.y >= 1.0 && goTransform.position.x < 0.01)
	{	
		goTransform.position.x = goTransform.position.x + vel;
	}
	
	if((Input.GetKeyUp("w") && Lift1.liftTransform.position.y >= 0.005 && Lift1.liftTransform.position.y <= 1 && goTransform.position.x >= -8.520014 && goTransform.position.x < -8) || (Input.GetKeyUp("w") && Lift1.liftTransform.position.y >= 0.005 && Lift1.liftTransform.position.y <= 1 && goTransform.position.x > -0.45 && goTransform.position.x < 0.15))
	{
		for(var i = 0; i<1000; i++)
		{
			goTransform.position.y = goTransform.position.y + liftVel;
			Lift1.liftTransform.position.y = Lift1.liftTransform.position.y + liftVel;
			Lift2.liftTransform.position.y = Lift1.liftTransform.position.y + liftVel;
		}
	}
	
	if((Input.GetKeyUp("s") && Lift1.liftTransform.position.y <= 1.5 && Lift1.liftTransform.position.y >= 0.505 && goTransform.position.x >= -8.520014 && goTransform.position.x < -8) || (Input.GetKeyUp("s") && Lift1.liftTransform.position.y <= 1.5 && Lift1.liftTransform.position.y >= 0.505 && goTransform.position.x > -0.45 && goTransform.position.x < 0.15))
	{	
		for(var j = 0; j<1000; j++)
		{
			goTransform.position.y = goTransform.position.y - liftVel;
			Lift1.liftTransform.position.y = Lift1.liftTransform.position.y - liftVel;
			Lift2.liftTransform.position.y = Lift1.liftTransform.position.y - liftVel;
		}
	}

}





