function escada(attributes){ 	//nome do Prototype
	return "\n\
	\
	<Transform DEF='Staircase' translation='9.7 -1.65 -8' rotation='0 1 0 3.14'>\n\
		<Group DEF='Escadas'>    \n\
			<Transform  translation='2.05 0.85 -4.9' rotation='0.0 1.0 0.0  3.14'>\n\
				<!--<Inline  bboxCenter='0.0 0.0 0.0' url='Escadaria/Escadas/escada01.x3d' bboxSize='5.0 5.0 5.0'/>-->\n\
				<prototype use='escada01'></prototype>\n\
			</Transform>\n\
			<Transform  translation='-2.5 3.3 1.1'>\n\
				<!--<Inline  bboxCenter='0.0 0.0 0.0' url='Escadaria/Patamares/patamarTP.x3d' bboxSize='5.0 5.0 5.0'/>-->\n\
				<prototype use='patamarTP'></prototype>\n\
			</Transform>\n\
			<Transform  translation='-0.05 3.25 1.25' rotation='0.0 1.0 0.0  3.14'>\n\
				<!--<Inline  DEF='Escada'  bboxCenter='0.0 0.0 0.0' url='Escadaria/Escadas/escada02.x3d' bboxSize='5.0 5.0 5.0'/>-->\n\
				<Group DEF='Escada'><prototype use='escada02'></prototype></Group>\n\
			</Transform>\n\
			<Transform  translation='1.25 3.0 -0.35'>\n\
			  <Group DEF='Colunm'>  \n\
				<Shape >\n\
					<Appearance >\n\
						<Material diffuseColor='0.8 0.6 0.2'/>\n\
					</Appearance>\n\
					<Cylinder radius='0.1' height='4.7'></Cylinder>\n\
				</Shape>\n\
			  </Group>\n\
			</Transform>\n\
			<Transform translation='1.25 1.825 1.05' scale='1.0 0.5 1.0'>\n\
				<Group USE='Colunm'/>\n\
			</Transform>\n\
		</Group>\n\
	</Transform>\n\
	\
	";
}