function escada1895(attr){ //nome do Prototype
	return "\n\
	\
		<Transform DEF='Staircase' translation='9.7 -1.65 -8' rotation='0 1 0 3.14'>\n\
			<Group DEF='Escadas'>  \n\
				<Transform  translation='2.05 0.85 5.75' >\n\
					<!-- <Inline  bboxCenter='0.0 0.0 0.0' url=''Escadaria/Escadas/escada01_1895.x3d-'' bboxSize='5.0 5.0 5.0'/> -->\n\
					<prototype use='escada01_1895'></prototype>\n\
				</Transform>\n\
				<Transform  translation='-2.5 3.3 1.1'>\n\
					<!-- <Inline  bboxCenter='0.0 0.0 0.0' url=''Escadaria/Patamares/patamar1895.x3d-'' bboxSize='5.0 5.0 5.0'/> -->\n\
					<prototype use='patamar1895'></prototype>\n\
				</Transform>\n\
				<Transform  translation='-0.05 3.25 1.25' rotation='0.0 1.0 0.0  3.14'>\n\
					<!-- <Inline  DEF='Escada' bboxCenter='0.0 0.0 0.0' url=''Escadaria/Escadas/escada02_1895.x3d-'' bboxSize='5.0 5.0 5.0'/> -->\n\
					<prototype use='escada02_1895'></prototype>\n\
				</Transform>\n\
				<Transform translation='1.25 1.825 -0.35'>\n\
					<Group DEF='Column'> \n\
						<Shape >\n\
							<Appearance >\n\
								<Material diffuseColor='0.8 0.6 0.2'/>\n\
							</Appearance>\n\
							<Cylinder radius='0.1' height='2.45'></Cylinder>\n\
						</Shape>\n\
					</Group>\n\
				</Transform>\n\
				<Transform translation='1.25 1.825 1.05' >\n\
					<Group USE='Column'/>\n\
				</Transform>\n\
			</Group>\n\
		</Transform>\n\
	\
	";
}

