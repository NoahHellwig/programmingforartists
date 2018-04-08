﻿// Programming for Artist Unity Exempel 1
// --------------------------------------
// 1. Add a cube to the Scene
// 2. Add this script to your Assets folder
// 3. Drag the script on to the cube

using UnityEngine;

// MonoBehaviour is the base class from which every Unity script derives.
public class ColorChanger : MonoBehaviour {
	
	// Update is called once per frame
    // use the r, g, b, key to change the color of primitive
	void Update () {
        // https://docs.unity3d.com/ScriptReference/Input.GetKeyDown.html
        if (Input.GetKeyDown(KeyCode.R))
        {
            GetComponent<Renderer>().material.color = Color.red;
        }
        if (Input.GetKeyDown(KeyCode.G))
        {
            GetComponent<Renderer>().material.color = Color.green;
        }
        if (Input.GetKeyDown(KeyCode.B))
        {
            GetComponent<Renderer>().material.color = Color.blue;
        }
    }
}
