function degrau1895(attr){ //nome do Prototype
	return "\n\
	\
	 <Transform DEF='Tapete' translation='0.0 0.010 0.0'>\n\
		 <Shape>\n\
			 <Appearance>\n\
				 <Material diffuseColor='0.8 0.6 0.2'/>\n\
			 </Appearance>\n\
			 <Box size='0.7 0.16 0.32'></Box>\n\
		 </Shape>\n\
	 </Transform>\n\
	 <Transform DEF='CentroBaixo' translation='0.0 -3.0E-4 -0.0015'>\n\
		 <Shape DEF='PisoInferior'>\n\
			 <Appearance>\n\
				 <Material diffuseColor='0.8 0.6 0.2'/>\n\
			 </Appearance>\n\
			 <Box size='0.7 0.163 0.318'></Box>\n\
		 </Shape>\n\
	 </Transform>\n\
	 <Transform translation='0.54 0.0010 0.0'>\n\
		 <Shape DEF='Lateral' >\n\
			 <Appearance >\n\
				 <Material diffuseColor='0.8 0.6 0.2'/>\n\
			 </Appearance>\n\
			 <Box size='0.38 0.165 0.32'></Box>\n\
		 </Shape>\n\
	 </Transform>\n\
	 <Transform translation='-0.54 0.0010 0.0'>\n\
		 <Shape USE='Lateral'/>\n\
	 </Transform>\n\
	 <Transform translation='0.0 0.09 -0.149' rotation='0.0 0.0 1.0 1.57'>\n\
		 <Shape >\n\
			 <Appearance >\n\
				 <Material diffuseColor='0.8 0.6 0.2'/>\n\
			 </Appearance>\n\
			 <Cylinder radius='0.01' height='0.7'></Cylinder>\n\
		 </Shape>\n\
	 </Transform>\n\
	\
	";
}


