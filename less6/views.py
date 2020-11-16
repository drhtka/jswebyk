# -*- coding: utf-8 -*-
from django.shortcuts import render, redirect
from django.template.response import TemplateResponse, HttpResponse
from less6.models import ProductModel
from django.views.generic.base import View

def JstDef6(request):
    return TemplateResponse(request, 'less6/html6.html')

class JsDefIn6(View):

    def get(self, request):

        print('chek')
        # print(request.GET.get('chek'))
        # print(request.GET.get('chek2'))
        # print(request.GET.get('chek3'))
        print(request.GET.get('datacard'))
        datacard = request.GET.get('datacard')
        print(datacard)
        all_data = request.GET.get('chek'), request.GET.get('chek2'), request.GET.get('chek3')
        # print(all_data[0], all_data[1], all_data[2])
        return render(request, 'less6/jsdefin.html', {'all_data':  all_data, 'datacard': datacard})

def JsDefDz6(request):
    all_products = ProductModel.objects.values_list()
    # print(all_products)
    return render(request, 'less6/htdz6.html', {'all_products': all_products})
