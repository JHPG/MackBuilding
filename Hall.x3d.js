var testHall = " 'halltranslation':'0 0 0', 'hallrotation':'-1 -1 -1 0', 'hallintcolor':'1 1 1' ";
function Hall(attr){ //nome do Prototype - Necessário: hallTranslation, hallRotation, hallIntColor
 return "\n\
  \
	<!--<ProtoDeclare name='Hall' appinfo='Entrance'>\n\
		<ProtoInterface>\n\
	  		 <field name='hallIntTextureUrl' type='MFString' accessType='inputOutput'/>\n\
	  		<field name='hallIntColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
	  		<field name='hallTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
	  		<field name='hallRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/> \n\
		</ProtoInterface> \n\
		<ProtoBody>-->\n\
			<Transform DEF='Hall' translation='"+ attr.halltranslation +"' rotation='"+ attr.hallrotation +"'>\n\
			  <!--<IS>\n\
				 <connect nodeField='translation' protoField='hallTranslation'/>\n\
			  </IS>\n\
			  <IS>\n\
				 <connect nodeField='rotation' protoField='hallRotation'/>\n\
				</IS>-->\n\
				<Transform  DEF='HallInt'  translation='3.55 1.3 -0.7' rotation='-1.0 0.0 0.0 -1.571'>\n\
					<Shape>\n\
						<Appearance >\n\
							<Material  DEF='HallntColor' diffuseColor='"+ attr.hallintcolor +"'>\n\
					  <!--<IS>\n\
						  <connect nodeField='diffuseColor' protoField='hallIntColor'/>\n\
						</IS>-->\n\
					</Material>\n\
					<ImageTexture url='texture/tijoloHall.jpg'/>\n\
					<TextureTransform scale='1 .7' translation='0 -.04' />\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='HallInt-FACES'  coordIndex=' 44 45 28 -1 28 29 44 -1 21 0 46 -1 46 47 21 -1 22 19 30 -1 30 31 22 -1 0 11 10 -1 10 1 0 -1 1 10 12 -1 12 2 1 -1 2 12 13 -1 13 3 2 -1 3 13 14 -1 14 4 3 -1 4 14 15 -1 15 5 4 -1 5 15 16 -1 16 6 5 -1 6 16 17 -1 17 7 6 -1 7 17 18 -1 18 8 7 -1 8 18 19 -1 19 9 8 -1 11 0 21 -1 21 20 11 -1 22 23 9 -1 9 19 22 -1 2 48 49 -1 49 1 2 -1 48 2 3 -1 3 50 48 -1 50 3 4 -1 4 51 50 -1 5 32 28 -1 45 51 4 -1 28 45 4 -1 5 28 4 -1 32 5 6 -1 6 33 32 -1 33 6 7 -1 7 34 33 -1 9 35 36 -1 36 8 9 -1 35 9 23 -1 23 37 35 -1 17 16 38 -1 38 39 17 -1 30 19 18 -1 18 40 30 -1 38 16 15 -1 15 41 38 -1 14 52 44 -1 14 44 29 -1 29 41 15 -1 14 29 15 -1 52 14 13 -1 13 53 52 -1 53 13 12 -1 12 54 53 -1 54 12 10 -1 10 55 54 -1 20 56 57 -1 57 11 20 -1 25 24 42 -1 42 43 25 -1 24 25 23 -1 23 22 24 -1 27 58 59 -1 59 26 27 -1 27 26 20 -1 20 21 27 -1 34 7 8 -1 8 36 34 -1 37 23 25 -1 25 43 37 -1 18 17 39 -1 39 40 18 -1 24 22 31 -1 31 42 24 -1 37 43 42 -1 37 42 31 -1 35 37 31 -1 36 35 31 -1 34 36 31 -1 33 34 31 -1 32 33 31 -1 32 31 30 -1 28 32 30 -1 28 30 40 -1 28 40 39 -1 28 39 38 -1 28 38 41 -1 29 28 41 -1 46 0 1 -1 1 49 46 -1 10 11 57 -1 57 55 10 -1 56 20 26 -1 26 59 56 -1 27 21 47 -1 47 58 27 -1 59 58 47 -1 51 45 44 -1 50 51 44 -1 48 50 44 -1 49 48 44 -1 46 49 44 -1 46 44 52 -1 47 46 52 -1 47 52 53 -1 47 53 54 -1 47 54 55 -1 47 55 57 -1 47 57 56 -1 59 47 56 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='HallInt-COORD'  point='1.8 0.2 0.0, 1.691 0.2 -0.6156, 1.379 0.2 -1.157, 0.9 0.2 -1.559, 0.3126 0.2 -1.773, -0.3126 0.2 -1.773, -0.9 0.2 -1.559, -1.379 0.2 -1.157, -1.691 0.2 -0.6156, -1.8 0.2 0.0, 1.691 0.4 -0.6156, 1.8 0.4 0.0, 1.379 0.4 -1.157, 0.9 0.4 -1.559, 0.3126 0.4 -1.773, -0.3126 0.4 -1.773, -0.9 0.4 -1.559, -1.379 0.4 -1.157, -1.691 0.4 -0.6156, -1.8 0.4 0.0, 1.8 0.4 1.3, 1.8 0.2 1.3, -1.8 0.4 1.3, -1.8 0.2 1.3, -1.8 0.4 2.2, -1.8 0.2 2.2, 1.8 0.4 2.2, 1.8 0.2 2.2, -2.8 0.2 -2.4, -2.8 0.4 -2.4, -2.8 0.4 0.7429, -2.8 0.4 1.3, -2.8 0.2 -2.255, -2.8 0.2 -2.162, -2.8 0.2 -1.971, -2.8 0.2 0.7429, -2.8 0.2 0.527, -2.8 0.2 1.3, -2.8 0.4 -2.162, -2.8 0.4 -1.971, -2.8 0.4 0.527, -2.8 0.4 -2.255, -2.8 0.4 2.2, -2.8 0.2 2.2, 2.8 0.4 -2.4, 2.8 0.2 -2.4, 2.8 0.2 0.7429, 2.8 0.2 1.3, 2.8 0.2 -1.971, 2.8 0.2 -1.68, 2.8 0.2 -2.162, 2.8 0.2 -2.255, 2.8 0.4 -2.255, 2.8 0.4 -2.162, 2.8 0.4 -1.971, 2.8 0.4 -1.68, 2.8 0.4 1.3, 2.8 0.4 0.7429, 2.8 0.2 2.2, 2.8 0.4 2.2, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
		<Transform  DEF='HallExt'  translation='3.55 1.3 -0.7' rotation='-1.0 0.0 0.0  -1.571'>\n\
			<Shape>\n\
				<Appearance>\n\
					<Material  diffuseColor='0.8941 0.6 0.7216'/>\n\
					<ImageTexture url='texture/tijoloHall.jpg'/>\n\
					<TextureTransform scale='1 .7' translation='0 -.04' />\n\
				</Appearance>\n\
				<IndexedFaceSet  DEF='HallExt-FACES'  coordIndex=' 33 12 9 -1 9 6 33 -1 6 10 5 -1 6 5 32 -1 33 6 32 -1 0 4 7 -1 7 2 0 -1 10 11 8 -1 8 5 10 -1 9 3 2 -1 11 9 2 -1 11 2 7 -1 8 11 7 -1 7 4 34 -1 34 31 7 -1 0 1 35 -1 0 35 34 -1 0 34 4 -1 12 36 37 -1 37 13 12 -1 13 37 38 -1 38 14 13 -1 14 38 39 -1 39 15 14 -1 15 39 40 -1 40 16 15 -1 16 40 41 -1 41 17 16 -1 17 41 42 -1 42 18 17 -1 18 42 43 -1 43 19 18 -1 19 43 44 -1 44 20 19 -1 20 44 45 -1 45 21 20 -1 36 23 22 -1 22 37 36 -1 37 22 24 -1 24 38 37 -1 38 24 25 -1 25 39 38 -1 39 25 26 -1 26 40 39 -1 40 26 27 -1 27 41 40 -1 41 27 28 -1 28 42 41 -1 42 28 29 -1 29 43 42 -1 43 29 30 -1 30 44 43 -1 44 30 31 -1 31 45 44 -1 32 23 36 -1 33 32 36 -1 12 33 36 -1 21 45 31 -1 21 31 34 -1 35 21 34 -1 12 13 9 -1 13 14 9 -1 14 15 9 -1 15 16 9 -1 16 17 3 -1 3 9 16 -1 17 18 3 -1 18 19 3 -1 19 20 1 -1 1 3 19 -1 20 21 1 -1 21 35 1 -1 29 28 7 -1 31 30 7 -1 30 29 7 -1 28 27 7 -1 27 26 8 -1 8 7 27 -1 26 25 8 -1 25 24 8 -1 24 22 5 -1 5 8 24 -1 22 23 5 -1 23 32 5 -1 0 2 3 -1 3 1 0 -1 6 9 11 -1 11 10 6 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='HallExt-COORD'  point='-2.8 0.7 1.3, -2.8 0.4 1.3, -2.8 0.7 -2.4, -2.8 0.4 -2.4, -2.8 0.8 1.3, 2.8 0.8 1.3, 2.8 0.4 1.3, -2.8 0.8 -2.4, 2.8 0.8 -2.4, 2.8 0.4 -2.4, 2.8 0.7 1.3, 2.8 0.7 -2.4, 1.8 0.4 0.0, 1.691 0.4 -0.6156, 1.379 0.4 -1.157, 0.9 0.4 -1.559, 0.3126 0.4 -1.773, -0.3126 0.4 -1.773, -0.9 0.4 -1.559, -1.379 0.4 -1.157, -1.691 0.4 -0.6156, -1.8 0.4 0.0, 1.691 0.8 -0.6156, 1.8 0.8 0.0, 1.379 0.8 -1.157, 0.9 0.8 -1.559, 0.3126 0.8 -1.773, -0.3126 0.8 -1.773, -0.9 0.8 -1.559, -1.379 0.8 -1.157, -1.691 0.8 -0.6156, -1.8 0.8 0.0, 1.8 0.8 1.3, 1.8 0.4 1.3, -1.8 0.8 1.3, -1.8 0.4 1.3, 1.8 0.6 0.0, 1.691 0.6 -0.6156, 1.379 0.6 -1.157, 0.9 0.6 -1.559, 0.3126 0.6 -1.773, -0.3126 0.6 -1.773, -0.9 0.6 -1.559, -1.379 0.6 -1.157, -1.691 0.6 -0.6156, -1.8 0.6 0.0, 2.8 0.7994 -2.4, 2.8 0.8 -2.4, '/>\n\
				</IndexedFaceSet>\n\
			</Shape>\n\
		</Transform>\n\
		<Transform  DEF='LeftFooter'  translation='1.25 -0.8 -0.10'>\n\
			<Group DEF='Footer'>\n\
				<Shape >\n\
					<Appearance DEF='stone'>\n\
						<Material  diffuseColor='0.6 0.8941 0.7216'/>\n\
						<ImageTexture url='texture/stone.jpg' />\n\
						<TextureTransform scale='1.0 1'/>\n\
					</Appearance>\n\
					<Box  size='1.0 1.6 0.4'/>\n\
				</Shape>\n\
			</Group>\n\
		</Transform>\n\
		<Transform  DEF='RightFooter'  translation='5.85 -0.8 -0.10'>\n\
			<Group USE='Footer' />\n\
		</Transform>\n\
		<Transform  DEF='Dripping'  translation='3.55 3.85 -0.075'>\n\
			<Shape >\n\
				<Appearance >\n\
					<Material  diffuseColor='0.9 0.9 0.9'/>\n\
					<ImageTexture url='texture/pingadeira.jpg' repeatS='true'/>\n\
					<TextureTransform scale='5.6 1'/>\n\
				</Appearance>\n\
				<Box  size='5.6 0.3 0.45'/>\n\
			</Shape>\n\
		</Transform>\n\
	</Transform>\n\
	<!--</ProtoBody>\n\
	</ProtoDeclare>\n\
	<ProtoInstance name='Hall'/> -->\n\
	\
	";
}
