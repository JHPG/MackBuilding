var testFirstFloor = " 'firstfloortranslation':'6 -1.1 -8.7', 'firstfloorrotation':'-1 -1 -1 0', 'firstfloorscale':'1 1 1', 'firstfloortextureurl':'texture/floorwood.jpg' ";

function FirstFloor(attr){ //nome do Prototype - Necessário: __________
	return "\n\
	\
	<!--<ProtoDeclare name='1floor' appinfo='first floor'>\n\
		<ProtoInterface>\n\
			<field name='1floorTextureUrl' type='MFString' accessType='inputOutput'/> \n\
			<field name='1floorColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
			<field name='1floorScale' type='SFVec3f' value='1 1 1' accessType='inputOutput'/> \n\
			<field name='1floorTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
			<field name='1floorRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/>\n\
		</ProtoInterface> \n\
		<ProtoBody> -->\n\
		<Transform DEF='1Floor' translation='"+ attr.firstfloortranslation +"' rotation='"+ attr.firstfloorrotation +"' scale='"+ attr.firstfloorscale +"'>\n\
			<!-- <IS>\n\
				<connect nodeField='translation' protoField='1floorTranslation'/>\n\
			</IS>\n\
			<IS>\n\
				<connect nodeField='rotation' protoField='1floorRotation'/>\n\
			</IS>\n\
			<IS>\n\
				<connect nodeField='scale' protoField='1floorScale'/>\n\
			</IS> -->\n\
			<Shape>\n\
				<IndexedFaceSet  DEF='1floor-FACES'  coordIndex=' 1 5 16 -1 16 17 1 -1 1 3 7 -1 7 5 1 -1 12 13 7 -1 7 3 12 -1 2 0 4 -1 4 6 2 -1 8 0 2 -1 2 14 8 -1 10 5 7 -1 7 13 10 -1 2 6 15 -1 15 14 2 -1 8 11 10 -1 10 9 8 -1 14 15 11 -1 11 8 14 -1 9 10 13 -1 13 12 9 -1 21 22 0 -1 21 0 8 -1 18 21 8 -1 18 8 9 -1 18 9 1 -1 18 1 17 -1 9 12 3 -1 3 1 9 -1 11 15 6 -1 6 4 11 -1 4 0 22 -1 22 23 4 -1 19 16 5 -1 19 5 10 -1 19 10 11 -1 20 19 11 -1 20 11 4 -1 20 4 23 -1 21 20 23 -1 23 22 21 -1 20 21 18 -1 18 19 20 -1 17 16 19 -1 19 18 17 -1' solid='true' ccw='true'>\n\
					<Coordinate  DEF='1floor-COORD'  point='-7.075 0.0 8.55, 7.075 0.0 8.55, -7.075 0.0 -8.55, 7.075 0.0 -8.55, -7.075 0.2 8.55, 7.075 0.2 8.55, -7.075 0.2 -8.55, 7.075 0.2 -8.55, 0.925 0.0 -7.45, 5.925 0.0 -7.45, 5.925 0.2 -7.45, 0.925 0.2 -7.45, 5.925 0.0 -8.55, 5.925 0.2 -8.55, 0.925 0.0 -8.55, 0.925 0.2 -8.55, 5.925 0.2 8.55, 5.925 0.0 8.55, 5.925 0.0 7.45, 5.925 0.2 7.45, 0.925 0.2 7.45, 0.925 0.0 7.45, 0.925 0.0 8.55, 0.925 0.2 8.55, '/>\n\
				</IndexedFaceSet>\n\
				 <Appearance>\n\
					<Material diffuseColor='1 1 1'/>\n\
					<ImageTexture url='"+ attr.firstfloortextureurl +"'>\n\
					<!-- <IS>\n\
						 <connect nodeField='url' protoField='1floorTextureUrl'/>\n\
					</IS> -->\n\
					</ImageTexture>\n\
				 </Appearance>\n\
			</Shape>\n\
		</Transform>\n\
	\
	";
}
