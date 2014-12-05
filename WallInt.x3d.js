var testWallInt = " 'wallinttextureurl':'', 'wallinttexturetransformscale':'0.9 1.25', 'wallintcolor':'0 1 1', 'wallintscale':'1 1 1', 'wallinttranslation':'0 0 0', 'wallintrotation':'-1 -1 -1 0' ";	//Colocar parametros aqui para testar

function WallInt(attributes){ //nome do Prototype (OldFrontStairsPrototype)
	return "\n\
	\
		<!--<ProtoDeclare name='WallInt' appinfo='Entrance'>\n\
			<ProtoInterface>\n\
				<field name='wallIntTextureUrl' type='MFString' accessType='inputOutput'/>\n\
				<field name='wallIntTextureTransformScale' type='SFVec2f' value='0.0' accessType='inputOutput' />\n\
				<field name='wallIntColor' type='SFColor' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='wallIntScale' type='SFVec3f' value='1 1 1' accessType='inputOutput'/>\n\
				<field name='wallIntTranslation' type='SFVec3f' value='0 0 0' accessType='inputOutput'/>\n\
				<field name='wallIntRotation' type='SFRotation' value='-1 -1 -1 0' accessType='inputOutput'/> -->\n\
			\n\
			<Transform DEF='WallIntRoom' translation='"+ attributes.wallinttranslation +"' rotation='"+ attributes.wallintrotation +"' scale='"+ attributes.wallintscale +"'>\n\
				<!-- <IS>\n\
				 <connect nodeField='translation' protoField='wallIntTranslation'/>\n\
			   </IS>\n\
			   <IS>\n\
				 <connect nodeField='rotation' protoField='wallIntRotation'/>\n\
			   </IS>\n\
			   <IS>\n\
				 <connect nodeField='scale' protoField='wallIntScale'/>\n\
			   </IS> -->\n\
			   <Transform translation='0 0 0'>\n\
					<Shape DEF='WallInt'>\n\
					  <Box size='1 4.6 0.2'></Box>\n\
					  <Appearance>\n\
						<Material diffuseColor='"+ attributes.wallintcolor +"'>\n\
						  <!-- <IS>\n\
							<connect nodeField='diffuseColor' protoField='wallIntColor'/>\n\
						  </IS> -->\n\
						</Material>\n\
						<ImageTexture url='"+ attributes.wallinttextureurl +"'>\n\
						  <!-- <IS>\n\
							<connect nodeField='url' protoField='wallIntTextureUrl'/>\n\
						  </IS> -->\n\
						</ImageTexture>\n\
						<TextureTransform scale='"+ attributes.wallinttexturetransformscale +"'>\n\
						  <!-- <IS>\n\
							<connect nodeField='scale' protoField='wallIntTextureTransformScale'/>\n\
						  </IS> -->\n\
						</TextureTransform>\n\
					  </Appearance>\n\
					</Shape>\n\
				</Transform>\n\
			</Transform>\n\
	\
	";
}