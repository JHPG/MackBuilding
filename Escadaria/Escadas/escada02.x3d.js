function escada02(attributes){  //nome do Prototype
  return "\n\
  \
  <!-- <Group  DEF='Escada' > -->\n\
      <Transform  translation='0.0 0.165 -0.32'>\n\
          <!-- <Inline  DEF='Degrau'  url='Degraus/degrau.x3d'/> -->\n\
          <prototype use='Degrau'></prototype>\n\
      </Transform>\n\
      <Transform  translation='0.0 0.33 -0.64'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 0.495 -0.96'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 0.66 -1.28'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 0.825 -1.6'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 0.99 -1.92'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 1.155 -2.24'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 1.32 -2.56'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 1.455 -2.88'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 1.62 -3.2'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 1.785 -3.52'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 1.95 -3.84'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 2.115 -4.16'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.0 2.28 -4.48'>\n\
          <Group USE='Degrau'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.2409 -2.3' rotation='1.0 0.0 0.0  0.47'>\n\
          <Shape DEF='Suporte1' >\n\
              <Appearance >\n\
                  <Material  diffuseColor='0.8 0.6 0.2'/>\n\
              </Appearance>\n\
              <Box  size='0.1 0.39 5.11'></Box>\n\
          </Shape>\n\
      </Transform>\n\
      <Transform  translation='0.76 0.57 -0.28'>\n\
          <!-- <Inline  DEF='Balaustre'  url='../Balaustres/balaustre02.x3d'/> -->\n\
          <prototype use='Balaustre2'></prototype>\n\
      </Transform>\n\
      <Transform  translation='0.76 0.712 -0.56'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 0.854 -0.84'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 0.996 -1.12'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.138 -1.4'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.28 -1.68'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.422 -1.96'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.564 -2.24'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.706 -2.52'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.848 -2.8'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 1.99 -3.08'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 2.132 -3.36'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 2.274 -3.64'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 2.416 -3.92'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.76 2.558 -4.2'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.2409 -2.3' rotation='1.0 0.0 0.0  0.47'>\n\
          <Shape  DEF='Suporte2' >\n\
              <Appearance >\n\
                  <Material  diffuseColor='0.8 0.6 0.2'/>\n\
              </Appearance>\n\
              <Box  size='0.1 0.39 5.11'></Box>\n\
          </Shape>\n\
      </Transform>\n\
      <Transform  translation='-0.76 0.57 -0.28'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 0.712 -0.56'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 0.854 -0.84'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 0.996 -1.12'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.138 -1.4'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.28 -1.68'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.422 -1.96'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.564 -2.24'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.706 -2.52'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.848 -2.8'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 1.99 -3.08'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 2.132 -3.36'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 2.274 -3.64'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 2.416 -3.92'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='-0.76 2.558 -4.2'>\n\
          <Group USE='Balaustre2'/>\n\
      </Transform>\n\
      <Transform  translation='0.759 3.438 -4.5' rotation='1.0 0.0 0.0  0.47'>\n\
          <!-- <Inline  DEF='Corrimao'  url=''../Corrimaos/corrimao.x3d''/> -->\n\
          <prototype use='Corrimao'></prototype>\n\
      </Transform>\n\
      <Transform  translation='-0.759 3.438 -4.5' rotation='1.0 0.0 0.0  0.47'>\n\
          <Group USE='Corrimao'/>\n\
      </Transform>\n\
  </Group>\n\
  \
  ";
}
